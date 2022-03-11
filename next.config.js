/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  images: {
    domains: ["api-cdn.myanimelist.net", "cdn.myanimelist.net"],
  },
};

module.exports = nextConfig;
