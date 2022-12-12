/** @type {import('next').NextConfig} */
import { config } from "dotenv";
config();

export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: { infura: process.env.INFURA },
};
