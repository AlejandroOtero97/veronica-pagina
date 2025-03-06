/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix when running locally with npm run dev
  // For GitHub Pages deployment, they should be set as follows:
  basePath: '/veronica-pagina',
  assetPrefix: '/veronica-pagina/',
  trailingSlash: true,
}

module.exports = nextConfig
