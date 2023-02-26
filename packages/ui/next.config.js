// /** @type {import('next').NextConfig} */
// import { config } from "dotenv";
// config();

// export default {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   // env: { infura: process.env.INFURA },
// };
module.exports = {
  typescript: {
    tsconfigPath: "./src/pages/tsconfig.app.json",
  },
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      mocha: false,
      // path: false,
      child_process: false,
      "@zionstate/database/FS": false,
    };
    return config;
  },
  experimental: {
    reactRoot: true,
  },
};
