const withAcmeNextConfig = require('@acme/next-config');

/**
 * @type {import('next').NextConfig}
 */
const config = {
  experimental: {
    appDir: true,
  },
};

module.exports = withAcmeNextConfig(config);
