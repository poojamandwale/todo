import webpackConfig from './webpack.config.js'; 

module.exports = defineConfig({ 

    e2e: {

      setupNodeEvents(on, config) {

        on('file:preprocessor', webpackPreprocessor(webpackConfig));

      }

    }

  });