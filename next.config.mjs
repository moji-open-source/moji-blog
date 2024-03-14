/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.node/,
  //     loader: "node-loader",
  //   });

  //   return config;
  // },
  experimental: {
    serverComponentsExternalPackages: ['hexo', 'hexo-fs', 'hexo-util']
  },
  output: 'export'
};

export default nextConfig;