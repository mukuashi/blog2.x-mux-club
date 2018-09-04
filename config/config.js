// https://umijs.org/config/
import os from 'os';
import { resolve } from 'path';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import defaultSettings from './settings.config';

export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
        polyfills: ['ie11'],
        ...(!process.env.TEST && os.platform() === 'darwin'
          ? {
              dll: {
                include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
                exclude: ['@babel/runtime'],
              },
              hardSource: true,
            }
          : {}),
      },
    ],
  ],
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  sass: {
    'node-sass': true,
  },
  alias: {
    components: resolve(__dirname, 'src/components/'),
    utils: resolve(__dirname, 'src/utils/'),
    locales: resolve(__dirname, 'src/locales/'),
    services: resolve(__dirname, 'src/services/'),
    models: resolve(__dirname, 'src/models/'),
    styles: resolve(__dirname, 'src/styles/'),
    layouts: resolve(__dirname, 'src/layouts/'),
    assets: resolve(__dirname, 'src/assets/'),
    pages: resolve(__dirname, 'src/pages/'),
  },
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  manifest: {
    name: 'blog2.x-mux-club',
    background_color: '#fff',
    description: '2.x mukuashi@PhotoArtLife Studio',
    display: 'standalone',
    start_url: '/index.html',
    icons: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  },
  chainWebpack: webpackplugin,
  cssnano: {
    mergeRules: false,
  },
};