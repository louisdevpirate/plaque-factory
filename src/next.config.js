console.log("✅ next.config.js loaded");

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/categories/4x4',
        destination: '/categories/suv',
        permanent: true, // 301
      },
    ];
  },
};