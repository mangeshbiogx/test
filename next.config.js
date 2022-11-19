/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:""
  },
  basePath:"/test",
  assetPrefix:"/test"
}

module.exports = nextConfig
