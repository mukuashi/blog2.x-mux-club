/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Router Setting Render
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-24 12:25:27
 * @version 0.1 | 2016-03-24 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-06-20 15:39:01
*/
import React from 'react';
import dynamic from 'dva/dynamic';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
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
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/"
            render={props => <BasicLayout {...props} />}
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
