import { Link } from "wouter";

import MainContainer from "./MainContainer.tsx";
// import _2024_03_03_optimizing_teams_calls from "./blog-posts/2024-03-03-optimizing-teams-calls.md";
import _2024_03_31_the_creation_story from "./blog-posts/2024-03-31-the-creation-story.md";
import ErrorPage from "./ErrorPage.tsx";

export interface BlogPostMetadata {
  key: number;
  title: string;
  Src: React.ComponentType;
}

const blogPostsMetadata: { [id: string]: BlogPostMetadata } = {
  // "2024-03-03-optimizing-teams-calls": {
  //   key: 2,
  //   title: "Optimizing teams calls for viewer pleasure",
  //   Src: _2024_03_03_optimizing_teams_calls,
  // },
  "2024-03-06-the-creation-story": {
    key: 1,
    title: "The creation story",
    Src: _2024_03_31_the_creation_story,
  },
};

export function BlogPost({ id }: { id: string }) {
  if (id in blogPostsMetadata) {
  const Src = blogPostsMetadata[id].Src;
  return <Src />;
  }
  return <ErrorPage />
}

function BlogMenuItem({ id }: { id: string }) {
  const title = blogPostsMetadata[id].title;
  return (
    <li>
      <Link to={`blog/${id}`}>{title}</Link>
    </li>
  );
}

export function Blog() {
  return (
    <MainContainer homeButtonPresent={true}>
      <h1>Blog</h1>
      <ul>
        {Object.entries(blogPostsMetadata).map(([id, metadata]) => (
          <BlogMenuItem key={metadata.key} id={id} />
        ))}
      </ul>
    </MainContainer>
  );
}
