export default [
  {
    input: "classes/dist/zionstate-ui-classes.cjs.js",
    output: {
      file: "classes/dist/zionstate-ui-classes.cjs.js",
      format: "cjs",
      banner: "'use client';",
    },
  },
  {
    input: "classes/dist/zionstate-ui-classes.esm.js",
    output: {
      file: "classes/dist/zionstate-ui-classes.esm.mjs",
      format: "esm",
      banner: "'use client';",
    },
  },
  {
    input: "style/dist/zionstate-ui-style.cjs.js",
    output: {
      file: "style/dist/zionstate-ui-style.cjs.js",
      format: "cjs",
      banner: "'use client';",
    },
  },
  {
    input: "style/dist/zionstate-ui-style.esm.js",
    output: {
      file: "style/dist/zionstate-ui-style.esm.mjs",
      format: "esm",
      banner: "'use client';",
    },
  },
  {
    input: "components/dist/zionstate-ui-components.cjs.js",
    output: {
      file: "components/dist/zionstate-ui-components.cjs.js",
      format: "cjs",
    },
  },
  {
    input: "components/dist/zionstate-ui-components.esm.js",
    output: {
      file: "components/dist/zionstate-ui-components.esm.mjs",
      format: "esm",
    },
  },
  {
    input: "colors-entrypoint/dist/zionstate-ui-colors-entrypoint.cjs.js",
    output: {
      file: "colors-entrypoint/dist/zionstate-ui-colors-entrypoint.cjs.js",
      format: "cjs",
    },
  },
  {
    input: "colors-entrypoint/dist/zionstate-ui-colors-entrypoint.esm.js",
    output: {
      file: "colors-entrypoint/dist/zionstate-ui-colors-entrypoint.esm.mjs",
      format: "esm",
    },
  },
  {
    input: "next/dist/zionstate-ui-next.cjs.js",
    output: {
      file: "next/dist/zionstate-ui-next.cjs.js",
      format: "cjs",
    },
  },
  {
    input: "next/dist/zionstate-ui-next.esm.js",
    output: {
      file: "next/dist/zionstate-ui-next.esm.mjs",
      format: "esm",
    },
  },
];




 