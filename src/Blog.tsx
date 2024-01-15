import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import Loading from "./Loading.tsx";
import MainContainer from "./MainContainer.tsx";
import blogPosts from "./blogPosts.tsx";

interface BlogEntryProps {
  md: string;
}

export function BlogEntry({ md }: BlogEntryProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setText(text))
      .finally(() => setIsLoading(false));
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {text}
    </Markdown>
  );
}

interface BlogMenuItemProps {
  id: number;
  title: string;
}

function BlogMenuItem({ id, title }: BlogMenuItemProps) {
  return (
    <li key={id}>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
}

export function Blog() {
  return (
    <MainContainer>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <BlogMenuItem id={post.id} title={post.title} />
        ))}
      </ul>
    </MainContainer>
  );
}
