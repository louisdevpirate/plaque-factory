console.log("✅ next.config.ts loaded");
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
    minimumCacheTTL: 60, // cache optimized images for 60 seconds
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint blocking the build on Vercel
  },
};

export default nextConfig;
