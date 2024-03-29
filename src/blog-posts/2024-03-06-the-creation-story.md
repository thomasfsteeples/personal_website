# The creation story

As is customary with over-engineered websites, we need a blog post to explain how it works.

## In the beginning...

The first incarnation of my website came about in ..., I had just started my PhD and wanted some way of communicating to the world that I wasn't completely tech-illiterate. My friends were using [Hugo](https://gohugo.io/) at the time, and looked kinda cool, so I settled for that. I used the [aafu](https://github.com/darshanbaral/aafu) theme and even now you can still see its influence on my current site.

<figure>
    <img src="./assets/aafu.png"
         alt="A screenshot of the aafu Hugo template" />
    <figcaption>The aafu Hugo template.</figcaption>
</figure>

When I went to update my site, it cost me $0 and I loved it.

## The big update

My last site worked well enough, but I wanted something that looked a bit slicker, more professional 

My website is built with React and Typescript, using the Vite build system. I write the blog posts in Markdown, and render them to HTML server-side. For this, I use the [unified](https://github.com/unifiedjs/unified) ecosystem to 

<pre>
<code class="language-ts">
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
  for (let i = 0; i &lt; str.length; i++) {
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

        const backtickRegex = /(?&lt;!\\)`/g;
        html = html.replaceAll(backtickRegex, "\\\`");
        const dollarRegex = /(?&lt;!\\)\$/g;
        html = html.replaceAll(dollarRegex, "\\\$");

        const imports = {};
        const replacer = (match: string, p1: string, p2: string) =&gt; {
          let res = "";
          if (p1 in imports) {
            res = imports[p1];
          } else {
            res = "n" + hash(p1);
            imports[p1] = res;
          }
          return "&lt;img src=${" + res + "}" + " " + p2 + " " + "/&gt;";
        };

        const assetRegex = new RegExp('&lt;img src="([^"]*)" (.*) /&gt;');
        html = html.replace(assetRegex, replacer);

        const importStatements = Object.entries(imports).map(
          ([k, v]) =&gt; `import ${v} from "${k}";`
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
</code>
</pre>

If you would like to investigate the source in detail, my website can be found on [Github](https://github.com/thomasfsteeples/personal_website).


I can also do math:

$$
e = mc^2
$$
