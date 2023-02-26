export default [
  {
    input: "dist/zionstate-zionbase.esm.js",
    output: {
      file: "dist/zionstate-zionbase.esm.mjs",
      format: "esm",
    },
  },
  {
    input: "dist/zionstate-zionbase.cjs.js",
    output: {
      file: "dist/zionstate-zionbase.cjs.js",
      format: "cjs",
    },
  },
  {
    input: "utils/dist/zionstate-zionbase-utils.esm.js",
    output: {
      file: "utils/dist/zionstate-zionbase-utils.esm.mjs",
      format: "esm",
    },
  },
  {
    input: "utils/dist/zionstate-zionbase-utils.cjs.js",
    output: {
      file: "utils/dist/zionstate-zionbase-utils.cjs.js",
      format: "cjs",
    },
  },
  {
    input:
      "zionbase/dist/zionstate-zionbase-zionbase.esm.js",
    output: {
      file: "zionbase/dist/zionstate-zionbase-zionbase.esm.mjs",
      format: "esm",
    },
  },
  {
    input:
      "zionbase/dist/zionstate-zionbase-zionbase.cjs.js",
    output: {
      file: "zionbase/dist/zionstate-zionbase-zionbase.cjs.js",
      format: "cjs",
    },
  },
];
