import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  typescript: {
    // Allow build to continue with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allow build to continue with lint errors
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
