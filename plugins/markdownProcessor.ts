import { Eta } from "eta";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { transformWithEsbuild } from "vite";

// FNV-1a
function hash(str: string) {
  let res = BigInt(0x811c9dc5);
  for (let i = 0; i < str.length; i++) {
    res ^= BigInt(str.charCodeAt(i));
    res *= BigInt(0x01000193);
    res &= BigInt(0xffffffff);
  }
  return res;
}

export default function mdProcessorPlugin() {
  return {
    name: "markdown-processor",

    async transform(src: string, id: string) {
      const mdRegex = new RegExp(".*.md$");
      if (mdRegex.test(id)) {
        let html = String(
          await unified()
            .use(remarkParse)
            .use(remarkMath)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(rehypeKatex, { output: "mathml" })
            .use(rehypeHighlight)
            .use(rehypeStringify, { closeSelfClosing: true })
            .process(src)
        );

        const backtickRegex = /(?<!\\)`/g;
        html = html.replaceAll(backtickRegex, "\\`");
        const dollarRegex = /(?<!\\)\$/g;
        html = html.replaceAll(dollarRegex, "\\$");

        const imports = {};
        const replacer = (match: string, p1: string, p2: string) => {
          let res = "";
          if (p1 in imports) {
            res = imports[p1];
          } else {
            res = "n" + hash(p1);
            imports[p1] = res;
          }
          return "<img src=${" + res + "}" + " " + p2 + " " + "/>";
        };

        const assetRegex = new RegExp('<img src="([^"]*)" (.*) />');
        html = html.replace(assetRegex, replacer);

        const importStatements = Object.entries(imports).map(
          ([k, v]) => `import ${v} from "${k}";`
        );

        const eta = new Eta({ views: path.join(__dirname, "../templates") });
        const res = eta.render("./blog-post.eta", {
          importStatements: importStatements,
          html: html,
        });

        return transformWithEsbuild(res, id, {
          loader: "tsx",
          jsx: "automatic",
        });
      }
    },
  };
}
