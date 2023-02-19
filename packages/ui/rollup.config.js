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
      file: "classes/dist/zionstate-ui-classes.esm.js",
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
      file: "style/dist/zionstate-ui-style.esm.js",
      format: "esm",
      banner: "'use client';",
    },
  },
];
