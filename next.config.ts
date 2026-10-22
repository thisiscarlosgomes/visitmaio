import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/guia-local",
        destination: "/guia",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/visitmaio.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
