// import { Data } from "../../../../../../../../../../node_modules/vfile";
import { createElement, Fragment } from "react";
// import rehypeHighlight from "rehype-highlight";
// import dockerfile from "highlight.js/lib/languages/dockerfile";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import { Iprocessor } from "../Processor_v2";
import { visit } from "unist-util-visit";
import { Code } from "../../../../../style";

// export const md_raw_react_v2: Imd_raw_react_v2 = function () {};

// let storedPres:
//   | {
//       id: string;
//       position: any | undefined;
//     }
//   | undefined;

export const md_raw_react_v1: Iprocessor =
  (text: string) => () =>
    unified()
      .use(remarkParse)
      .use(() => tree => {
        const chartRegex = /(<chart).*(\/>)/g;
        const idValue = /id="(.*)"/g;
        let chartIdxs: number[] = [];
        let charts: unknown[] = [];
        visit(tree, "html", (pre, index) => {
          if (!index) return;
          let value: string = "";
          value;
          const test = chartRegex.test(pre.value);
          if (!test) return;
          chartIdxs.push(index);
          const id = idValue.exec(pre.value);
          if (!id) return;
          if (!id[1]) return;
          value = id[1];
          // storedPres = {
          //   id: value,
          //   position: pre.position,
          // };
        });
        if (!chartIdxs) return;
        chartIdxs.forEach(chartIdx => {
          if (!chartIdx) return;
          const sliced = tree.children.splice(chartIdx, 1);
          charts.push(sliced);
        });
        console.log(tree);

        return tree;
      })
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(() => {
        return tree => {
          visit(tree, "element", pre => {
            if (pre.tagName === "chart") {
              console.log(pre.properties);
            }
          });

          return tree;
        };
      })
      // .use(rehypeHighlight, {
      //   languages: { dockerfile },
      // })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          // p: props => <p {...props} id="unified"></p>,
          // chart: () => <div>ola</div>,
          // div: props => <div {...props}>I am so
          // cool</div>,
          code: Code,
        },
      })
      .process(text);
