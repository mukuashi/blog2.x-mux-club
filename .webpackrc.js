const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    'transform-decorators-legacy',
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    'components': path.resolve(__dirname, 'src/components/'),
    'utils': path.resolve(__dirname, 'src/utils/'),
    'config': path.resolve(__dirname, 'src/config/'),
    'services': path.resolve(__dirname, 'src/services/'),
    'models': path.resolve(__dirname, 'src/models/'),
    'routes': path.resolve(__dirname, 'src/routes/'),
    'styles': path.resolve(__dirname, 'src/styles/'),
    'layout': path.resolve(__dirname, 'src/layout/'),
    'assets': path.resolve(__dirname, 'src/assets/'),
  },
  ignoreMomentLocale: true,
  theme: './src/config/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '', //relative to HTML page (same directory)
  hash: true,
  sass: {
    'node-sass': true
  }
};
