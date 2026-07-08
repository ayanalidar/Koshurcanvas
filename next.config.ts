import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    qualities: [75, 85, 90],
  },
  allowedDevOrigins: [
    "preview-chat-00a43f39-6bbe-4f07-af9e-25821fb80bdd.space-z.ai",
  ],
};

export default nextConfig;