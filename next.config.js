/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'powerkernel.github.io',
        // port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
