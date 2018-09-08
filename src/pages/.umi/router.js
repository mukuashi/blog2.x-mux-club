import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/2.x",
    "component": dynamic({ loader: () => import('../../layouts'), loading: require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/components/Loading').default  }),
    "routes": [
      {
        "path": "/2.x",
        "name": "",
        "component": dynamic({ loader: () => import('../Home'), loading: require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/components/Loading').default  }),
        "exact": true
      },
      {
        "path": "/2.x/media",
        "name": "Media",
        "component": dynamic({ loader: () => import('../Media'), loading: require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/src/components/Loading').default  }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/mukuashi/Project/Blog/blog2.x-mux-club/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
