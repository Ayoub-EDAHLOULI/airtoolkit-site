import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle (.next/standalone) for a lean Docker image —
  // see Dockerfile.
  output: "standalone",
};

export default nextConfig;
