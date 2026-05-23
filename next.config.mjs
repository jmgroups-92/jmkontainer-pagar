/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // static export → Express serves web/out/
  distDir: 'out',
  images: { unoptimized: true },
  trailingSlash: true,
}
export default nextConfig
