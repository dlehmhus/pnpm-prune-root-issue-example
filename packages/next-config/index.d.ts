import type { NextConfig } from 'next';

declare function withAcmeNextConfig(nextConfig?: NextConfig): NextConfig;

export = withAcmeNextConfig;
