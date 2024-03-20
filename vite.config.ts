import react from "@vitejs/plugin-react";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeHighlight from "rehype-highlight";
import {  defineConfig } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

// Taken from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
function hash(str: string) {
  let res = 0;
  if (str.length === 0) {
    return res;
  }
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    res = (res << 5) - res + chr;
    res |= 0; // Convert to 32bit integer
  }
  return res;
}

function mdProcessorPlugin() {
  return {
    name: "markdown-processor",

    async transform(src, id) {
      const mdRegex = new RegExp(".*.md$");
      if (mdRegex.test(id)) {
        const imports = {};
        const replacer = (match, p1) => {
          let res = "";
          if (match in imports) {
            res = imports[match];
          } else {
            res = "n" + hash(p1);
            imports[p1] = res;
          }
          return "${" + res + "}";
        };

        const assetRegex = new RegExp("{{(.*)}}");
        let assetTransformedSrc = src.replace(assetRegex, replacer);

        const html = String(
          await unified()
            .use(remarkParse)
            .use(remarkMath)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(rehypeKatex, { output: "mathml" })
	    .use(rehypeHighlight)
            .use(rehypeStringify)
            .process(assetTransformedSrc)
        );

        const importStatements = Object.entries(imports).map(
          ([k, v]) => `import ${v} from "./${k}"`
        );
        const res = `
${importStatements}
const html = \` ${html} \`
export default html;`;
        return {
          code: res,
          map: null,
        };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginFaviconsInject("./src/assets/logo.svg"),
    mdProcessorPlugin(),
  ],
  build: {
    target: "es2015",
    minify: "esbuild",
  },
});
