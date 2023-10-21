/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lazy-image.vakhula.dev',
            port: '',
            pathname: '/',
          },
        ],
      },
}

module.exports = nextConfig
