import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
  eslint: {
    // Run ESLint using only this project's config, not the root monorepo's
    dirs: ['src'],
  },
  devIndicators: false,
};

export default withMDX(nextConfig);
