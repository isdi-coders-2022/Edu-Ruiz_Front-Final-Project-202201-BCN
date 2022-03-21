/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  images: {
    domains: ["api-cdn.myanimelist.net", "cdn.myanimelist.net"],
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    skipWaiting: true,
  },
};

module.exports = withPWA(nextConfig);
