import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        // ImgBB CDN — serves uploaded images (e.g. i.ibb.co/...)
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        // ImgBB main site
        protocol: "https",
        hostname: "imgbb.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
