/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 公共路由配置 => component + model(可选) + route
 * @usage from Ant Design Pro脚手架设计 | https://pro.ant.design/docs/router-and-nav
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-23 12:25:27
 * @version 0.1 | 2017-03-23  // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-06-20 14:58:40
*/
import { createElement } from 'react';
import dynamic from 'dva/dynamic';

let routerDataCache;
const modelNotExisted = (app, model) => (
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  })
);

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach((model) => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return (props) => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () => models.filter(
      model => modelNotExisted(app, model)).map(m => import(`../models/${m}`),
    ),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then((raw) => {
        const Component = raw.default || raw;
        return props => createElement(Component, {
          ...props,
          routerData: routerDataCache,
        });
      });
    },
  });
};
// 关于 dynamicWrapper | code template, please reference https://pro.ant.design/docs/router-and-nav#%E5%85%B3%E4%BA%8E-dynamicWrapper
export const getRouterData = (app) => {
  const routerConfig = {
    '/': {
      name: '',
      component: dynamicWrapper(app, ['global'], () => import('../layout')),
    },
    // 错误相关
    '/exception/403': {
      name: '未找到 - ',
      component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
    },
    '/exception/404': {
      name: '未找到 - ',
      component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
    },
    '/exception/500': {
      name: '网络错误 - ',
      component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
    },
    '/exception/110': {
      name: '服务错误 - ',
      component: dynamicWrapper(app, [], () => import('../routes/Exception/110')),
    },
  };
  // Route configuration data
  // eg. {name ...routerConfig }
  const routerData = {};
  // The route matches the menu
  Object.keys(routerConfig).forEach((path) => {
    let router = routerConfig[path];
    router = {
      ...router,
      name: router.name,
    };
    routerData[path] = router;
  });
  return routerData;
};
