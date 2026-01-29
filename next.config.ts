import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Disable image optimization caching in development to see image changes immediately
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
