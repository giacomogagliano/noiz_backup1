/** @type {import('next').NextConfig} */
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.resolve.fallback = {
      "styled-components": false,
    };

    return config;
  },
};
