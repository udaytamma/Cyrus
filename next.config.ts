import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Empty turbopack config so `next build` (without --webpack flag) doesn't error
  turbopack: {},

  // --- HMR Memory Optimizations ---
  // Option 1: Aggressively release Webpack module data between compilations
  // Trades slightly slower recompilations for flat memory usage across HMR cycles
  experimental: {
    webpackMemoryOptimizations: true,
    // Option 5: Transform barrel-file imports into direct module imports
    // Reduces the number of modules Webpack resolves per HMR cycle
    optimizePackageImports: ["firebase", "@firebase/firestore", "@firebase/app"],
  },

  // Dev uses --webpack flag (Turbopack has memory issues with large deps like Mermaid 65MB)
  webpack: (config: Configuration, { isServer, dev }) => {
    // --- Option 6: Debounce HMR recompilation ---
    // Batches rapid file saves into fewer rebuild cycles (300ms window)
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 300,
      };
    }

    // --- Option 4: Replace Mermaid with CDN stub in dev ---
    // Removes 65MB from Webpack's HMR module graph entirely during development
    // Production builds still bundle Mermaid normally via dynamic import
    if (dev && !isServer) {
      const webpack = require("webpack");
      config.plugins?.push(
        new webpack.NormalModuleReplacementPlugin(
          /^mermaid$/,
          path.resolve(__dirname, "src/lib/mermaid-dev-stub.ts")
        )
      );
    }

    if (!isServer && config.optimization) {
      // Split large libraries into separate chunks for better caching (production)
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
