/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

// Apply these settings only during production build (for GitHub Pages),
// not during local development
if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/veronica-pagina';
  nextConfig.assetPrefix = '/veronica-pagina/';
}

module.exports = nextConfig
