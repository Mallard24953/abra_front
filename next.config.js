/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)

const nextConfig = withNextIntl({
  experimental: { appDir: true, serverActions: true },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
})

module.exports = nextConfig
