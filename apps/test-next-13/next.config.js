module.exports = {
  webpack: config => {
    config.resolve.fallback = {
      "styled-components": false,
      fs: false,
      "rehype-highlight": false,
      "rehype-stringify": false,
      "remark-parse": false,
      "emark-rehype": false,
      "gray-matter": false,
    };
    return config;
  },
  experimental: {
    reactRoot: true,
    appDir: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
