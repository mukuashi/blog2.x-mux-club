import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/2.x",
    "component": dynamic({ loader: () => import('../../layouts'), loading: require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/components/Loading/index').default }),
    "routes": [
      {
        "path": "/2.x",
        "name": "",
        "component": dynamic({ loader: () => import('../Home'), loading: require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/components/Loading/index').default }),
        "exact": true,
        "_title": "2.x mukuashi@PhotoArtLife Studio",
        "_title_default": "2.x mukuashi@PhotoArtLife Studio"
      },
      {
        "path": "/2.x/media",
        "name": "Media",
        "component": dynamic({ loader: () => import('../Media'), loading: require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/components/Loading/index').default }),
        "exact": true,
        "_title": "2.x mukuashi@PhotoArtLife Studio",
        "_title_default": "2.x mukuashi@PhotoArtLife Studio"
      },
      {
        "component": () => React.createElement(require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "2.x mukuashi@PhotoArtLife Studio",
        "_title_default": "2.x mukuashi@PhotoArtLife Studio"
      }
    ],
    "_title": "2.x mukuashi@PhotoArtLife Studio",
    "_title_default": "2.x mukuashi@PhotoArtLife Studio"
  },
  {
    "component": () => React.createElement(require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
    "_title": "2.x mukuashi@PhotoArtLife Studio",
    "_title_default": "2.x mukuashi@PhotoArtLife Studio"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
