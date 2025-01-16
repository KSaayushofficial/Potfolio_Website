import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "logocreator.io" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "www.shutterstock.com" },
    ],
  },
};

export default nextConfig;
