import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "397jjnu6r4.ucarecd.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
