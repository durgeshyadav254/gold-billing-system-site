import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — drop on Vercel or any static host
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
