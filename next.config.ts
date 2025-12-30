import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // REQUIRED for Nginx / static hosting
  output: "export",

  // REQUIRED to avoid next/image runtime dependency
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
