/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can add any Next.js config options here if needed later.
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // enable analyzer when running with ANALYZE=true
});

module.exports = withBundleAnalyzer(nextConfig);
