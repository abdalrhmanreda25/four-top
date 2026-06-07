import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/four-top",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
