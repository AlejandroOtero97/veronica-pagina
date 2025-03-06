/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  basePath: process.env.NODE_ENV === 'production' ? '/veronica-pagina' : '',
  output: 'export',
}

module.exports = nextConfig
