/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@webfudge/ui', '@webfudge/auth', '@webfudge/billing', '@webfudge/utils'],
}

module.exports = nextConfig
