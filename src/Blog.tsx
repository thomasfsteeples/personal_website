import { useEffect, useState } from "react";
import { Link } from "wouter";

import Loading from "./Loading.tsx";
import MainContainer from "./MainContainer.tsx";
import { BlogPostMetadata, blogPostsMetadata } from "./blogPosts.tsx";

interface BlogPostProps {
  htmlSrc: string;
}

export function BlogPost({ htmlSrc }: BlogPostProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch(htmlSrc)
      .then((res) => res.text())
      .then((resText) => {
        setHtml(resText);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <Loading />;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

interface BlogMenuItemProps {
  blogPostMetadata: BlogPostMetadata;
}

function BlogMenuItem({ blogPostMetadata }: BlogMenuItemProps) {
  return (
    <li>
      <Link to={blogPostMetadata.url}>{blogPostMetadata.title}</Link>
    </li>
  );
}

export function Blog() {
  return (
    <MainContainer>
      <h1>Blog</h1>
      <ul>
        {blogPostsMetadata.map((bpmd) => (
          <BlogMenuItem key={bpmd.key} blogPostMetadata={bpmd} />
        ))}
      </ul>
    </MainContainer>
  );
}
