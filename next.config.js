const { withContentlayer } = require('next-contentlayer')

/**  @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true,
    exports: "output" }

module.exports = withContentlayer(nextConfig)