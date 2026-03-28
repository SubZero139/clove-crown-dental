import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const heroImageCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate",
      },
    ] as const;
    return [
      { source: "/images/hero-1.jpg", headers: [...heroImageCache] },
      { source: "/images/hero-2.jpg", headers: [...heroImageCache] },
      { source: "/images/hero-3.jpg", headers: [...heroImageCache] },
    ];
  },
};

export default nextConfig;
