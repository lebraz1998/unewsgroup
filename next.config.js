/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

module.exports = nextConfig;
