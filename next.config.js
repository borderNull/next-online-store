/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.lucyinthesky.com",
        pathname: "/data/**",
      },
    ],
  },
};

module.exports = nextConfig;
