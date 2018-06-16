/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Entry Index
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @version 0.1 | 2018-03-25 // Initial version.
 * @Date:   2018-03-25 18:20:27
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-06-16 20:22:33
*/
import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
// url里带#
// import createHistory from 'history/createHashHistory';
// url里不带#，使用/匹配路由
import createHistory from 'history/createBrowserHistory';

// 1. Initialize
const app = dva({
  history: createHistory(),
  onError(e) {
    console.log(e.message);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
// roadhog2.x后的用法必须在require后加.default
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;  // eslint-disable-line
