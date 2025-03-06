/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/veronica-pagina' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/veronica-pagina/' : '',
}

module.exports = nextConfig
