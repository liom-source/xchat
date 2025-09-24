/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 图像优化
  },
  trailingSlash: true, // 避免路由问题
};

module.exports = nextConfig;