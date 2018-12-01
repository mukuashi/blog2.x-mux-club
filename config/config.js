// https://umijs.org/config/
import os from 'os';
import { resolve } from 'path';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import defaultSettings from './settings.config';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      // 国际化配置，locale，2.x暂时不适配
      locale: {
        enable: false, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
      library: 'react', // 默认底层库 react | preact
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
      fastClick: true,
      title: defaultSettings.title,
      dynamicImport: {
        loadingComponent: './components/Loading/index',
      },
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
];

export default {
  // add for transfer to umi
  plugins,
  targets: {
    ie: 8,
  },
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
    '@': resolve(__dirname, 'src'),// umi默认，也可以不设置或在chainWebpack通过config.resolve.alias.set
  },
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  disableCSSModules: false, // css modules
  publicPath: `${defaultSettings.version}/`,
  hash: true,
  manifest: {
    name: 'blog2.x-mux-club',
    background_color: '#fff',
    description: defaultSettings.title,
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