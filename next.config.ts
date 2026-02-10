import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Empty turbopack config to silence warning (Turbopack used in dev)
  // Webpack config below is used for production builds
  turbopack: {},
  webpack: (config: Configuration, { isServer }) => {
    if (!isServer && config.optimization) {
      // Split large libraries into separate chunks for better caching
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...(typeof config.optimization.splitChunks === "object"
            ? config.optimization.splitChunks.cacheGroups
            : {}),
          // Mermaid is ~3MB bundled - split it into its own chunk
          mermaid: {
            test: /[\\/]node_modules[\\/]mermaid[\\/]/,
            name: "mermaid",
            chunks: "all" as const,
            priority: 30,
          },
          // Firebase is also large - split it
          firebase: {
            test: /[\\/]node_modules[\\/]firebase[\\/]/,
            name: "firebase",
            chunks: "all" as const,
            priority: 20,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
