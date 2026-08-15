import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → folder `out/` (matches Vercel Output Directory)
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
