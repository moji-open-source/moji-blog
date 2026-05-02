import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      { hostname: 'gravatar.com' },
      { hostname: '*.gravatar.com' },
      { hostname: 'algora.io', protocol: 'https' },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      'remark-gfm',
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'frontmatter' }],
    ],
    rehypePlugins: [
      [
        'rehype-pretty-code',
        {
          theme: {
            light: 'vitesse-light',
            dark: 'nord',
          },
          keepBackground: false,
        },
      ],
    ],
  },
})

export default withMDX(nextConfig)
