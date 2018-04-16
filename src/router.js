/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Router Setting Render
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-24 12:25:27
 * @version 0.1 | 2016-03-24 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-16 20:47:08
*/
import React from 'react';
import dynamic from 'dva/dynamic';
import { Spin } from 'antd';
import classNames from 'classnames';
import { Switch, Route, routerRedux } from 'dva/router';
import { getRouterData } from './config/router';
import styles from './styles/index.scss';

const cx = classNames.bind(styles);
const { ConnectedRouter } = routerRedux;
const classLayoutLoading = cx({
  'mux-global-loading': true,
});
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" delay={500} className={classLayoutLoading} />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const BasicLayout = routerData['/'].component;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path="/"
          render={props => <BasicLayout {...props} />}
        />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
