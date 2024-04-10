/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true
  },
  trailingSlash: true,
  useFileSystemPublicRoutes: false
}

export default nextConfig;
