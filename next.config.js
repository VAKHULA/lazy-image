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
      api: {
        bodyParser: false,
        responseLimit: '8mb',
      },
}

module.exports = nextConfig
