/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdnstorage.sendbig.com",
        protocol: "https",
      },
      {
        hostname: "api.unrealperson.com",
        protocol: "https",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
