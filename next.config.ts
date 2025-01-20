import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

export const nextConfig: NextConfig = {};

export default withPayload(nextConfig);
