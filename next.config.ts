import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.create.vista.com",
      },
    ],
  },
};

export default nextConfig;
