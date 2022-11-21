/**
 * @param {import('next').NextConfig} [defaultConfig]
 */
const withAcmeNextConfig = (defaultConfig) => {
  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    ...defaultConfig,
    webpack(webpackConfig, ctx) {
      webpackConfig.module.rules.push({
        //To load static files, for example fonts
        test: /\.(ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash]-[name].[ext]',
            outputPath: 'static/assets/',
            publicPath: '/_next/static/assets/',
          },
        },
      });

      if (defaultConfig.webpack) {
        return defaultConfig.webpack(webpackConfig, ctx);
      }

      return webpackConfig;
    },
  };
  return config;
};

module.exports = withAcmeNextConfig;
