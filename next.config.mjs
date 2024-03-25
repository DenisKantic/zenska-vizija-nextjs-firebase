/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true
  },
  trailingSlash: true,
  output: "export"
}

export default nextConfig;
