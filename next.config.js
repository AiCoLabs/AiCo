/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'components', 'Pix', 'src')],
  },
};

module.exports = nextConfig;