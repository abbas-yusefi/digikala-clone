import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.103"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
        pathname: "/digikala-adservice-banners/**",
      },
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
        pathname: "/digikala-products/**",
      },
      {
        protocol: "https",
        hostname: "image.torob.com",
        pathname: "/base/images/**",
      },
    ],
  },
};

export default nextConfig;
