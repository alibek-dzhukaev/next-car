/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['']
    },
    env: {
        API_URL: process.env.API_URL
    },
    // basePath: '/a',
    async rewrites() {
        return [
            {
                source: '/images/:path*',
                destination: 'http://localhost:4200/:path*'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/car/1',
                destination: '/car/2',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
