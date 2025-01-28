/* eslint-disable @typescript-eslint/no-require-imports */
const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  reactStrictMode: true,
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
/* eslint-enable @typescript-eslint/no-require-imports */
