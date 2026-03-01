import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  sassOptions: {
    includePaths: [path.resolve(__dirname, "node_modules")],
    // loadPaths: ["./src"],
  },
};

export default withNextIntl(nextConfig);
