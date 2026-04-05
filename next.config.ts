import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && Boolean(repositoryName);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: ".next-portfolio",
  output: isGitHubPagesBuild ? "export" : undefined,
  trailingSlash: isGitHubPagesBuild,
  images: {
    unoptimized: isGitHubPagesBuild,
  },
  basePath: isGitHubPagesBuild ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPagesBuild ? `/${repositoryName}/` : undefined,
};

export default nextConfig;
