import _2023_12_11_first_post from "./blog-posts/html/2023-12-11-first-post.html?url";

export interface BlogPostMetadata {
  key: number;
  title: string;
  loc: string;
  url: string;
}

export const blogPostsMetadata: BlogPostMetadata[] = [
  {
    key: 1,
    title: "First post",
    loc: _2023_12_11_first_post,
    url: "2023-12-11-first-post",
  },
];
