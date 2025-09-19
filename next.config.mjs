// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io','drive.google.com','newsmagx.in','flagcdn.com','tomtom.com'],
  },
  webpack: (config) => {
    config.externals = config.externals || {};
    return config;
  },
};

export default nextConfig; // <-- use export default instead of module.exports
