import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a plain-HTML export (used for shareable previews);
// redirects/headers only apply on a real server, so they're skipped there.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(isStaticExport ? { output: "export" as const } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    if (isStaticExport) return [];
    return [
      // Legacy e-commerce/shop URLs from the old site → relevant new pages
      { source: "/shop", destination: "/", permanent: true },
      { source: "/shop/:path*", destination: "/", permanent: true },
      { source: "/product/:path*", destination: "/", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/services", destination: "/#classes", permanent: true },
      { source: "/handwriting", destination: "/handwriting-classes", permanent: true },
      { source: "/abacus", destination: "/abacus-classes", permanent: true },
    ];
  },
  async headers() {
    if (isStaticExport) return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
