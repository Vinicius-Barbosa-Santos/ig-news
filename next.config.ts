// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(), // define a raiz como o diretório atual do projeto
  },
};

export default nextConfig;
