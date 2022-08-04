const path = require('path');

require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  webpack(config) {
    config.resolve.alias.pages = path.join(__dirname, 'pages');
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.lib = path.join(__dirname, 'lib');
    config.resolve.alias.styles = path.join(__dirname, 'styles');
    return config;
  },
};
