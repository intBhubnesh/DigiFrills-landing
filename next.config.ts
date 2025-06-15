import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Enable analyzer only when ANALYZE=true
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "getillustrations.b-cdn.net" },
      { protocol: "https", hostname: "www.svgrepo.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  // Add more options here if needed
};

// Export wrapped config
export default withAnalyzer(nextConfig);
