/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow standard <img> tags without next/image warnings
  images: {
    unoptimized: true,
  },
  // Explicitly opt into Turbopack (default in Next.js 16).
  // The @/ alias is resolved via jsconfig.json — no extra config needed.
  turbopack: {},
};

export default nextConfig;
