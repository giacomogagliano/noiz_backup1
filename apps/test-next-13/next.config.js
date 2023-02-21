module.exports = {
  webpack: config => {
    config.resolve.fallback = {
      "styled-components": false,
      fs: false,
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
