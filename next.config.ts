import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deploy as standard Next.js on Vercel (all pages are still static SSG).
  // Do NOT set output: "export" — that breaks Vercel's Next.js builder.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
