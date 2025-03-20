import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Diploma.Landing',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
