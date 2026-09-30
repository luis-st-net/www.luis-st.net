import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	outputFileTracingRoot: __dirname,
	transpilePackages: ["prismjs"],
};

export default nextConfig;
