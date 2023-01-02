const removeImports = require("next-remove-imports")();
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = removeImports({
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: "",
  reactStrictMode: true,
});
