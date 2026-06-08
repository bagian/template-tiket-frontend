import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'artatix.co.id',
      },
      {
        protocol: 'https',
        hostname: 's-light.tiket.photos',
      },
    ],
  },
};

export default nextConfig;
