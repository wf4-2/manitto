import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options */
  eslint: {
    dirs: ['src'],
  },
  images: {
    unoptimized: true, // 이미지 최적화 해제 (Next.js 내부 최적화 문제 해결)
  },
};

export default nextConfig;