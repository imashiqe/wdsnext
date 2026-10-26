import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/web-development-services', destination: '/services/website-development', permanent: true },
      { source: '/portfolio', destination: '/about', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
    ];
  },
};

export default nextConfig;
