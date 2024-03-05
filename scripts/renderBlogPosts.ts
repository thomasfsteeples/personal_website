import { Eta } from "eta";
import path from "node:path";
import rehypeKatex from "rehype-katex";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import url from "node:url";
import fs from "node:fs";
import { read } from "to-vfile";

const appDir = path.resolve(
	path.dirname(url.parse(import.meta.url).path),
	"../"
);

const blogPostDir = path.join(appDir, "blog-posts/markdown");
const outputDir = path.join(appDir, "blog-posts/html");

const blogPosts = [
	"2023-12-11-first-post",
	"2024-01-17-marina-a-didactic-sat-solver"
];

async function fileToHTML(filePath: string) {
	const renderedMarkdownVFile = await unified()
		.use(remarkParse)
		.use(remarkMath)
		.use(remarkRehype)
		.use(rehypeKatex)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(await read(filePath));

	return String(renderedMarkdownVFile);
}

async function processPost(post) {
	const blogPostPath = path.join(blogPostDir, post + ".md");

	const renderedMarkdown = await fileToHTML(blogPostPath);

	// const eta = new Eta({ views: blogPostDir });
	// const res = eta.render("template.eta", { contents: renderedMarkdown });


	fs.writeFileSync(path.join(outputDir, post + ".html"), renderedMarkdown);
}

async function main() {
	for (const post of blogPosts) {
		await processPost(post);
	}
}

await main();
