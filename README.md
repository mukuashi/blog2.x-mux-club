# 2.x Version Blog
from 2016，create a new version 2.x for blog，fit almost all the screens.
- React + Redux + DvaJS + UmiJS等
- Preview： http://kquanr.com/2.x
- 1.x：http://kquanr.com
- 3.x：http://kquanr.com/3.x
- more...

# Usage
* umijs：https://umijs.org
* dvajs：https://dvajs.com
* reactjs：https://reactjs.org
* redux-devtools：https://github.com/gaearon/redux-devtools(本地开发利器/时间旅行器)

## Features

* 📦 **开箱即用**，内置 react、react-router 等
* 🏈 **类 next.js 且[功能完备](https://umijs.org/guide/router.html)的路由约定**，同时支持配置的路由方式
* 🎉 **完善的插件体系**，覆盖从源码到构建产物的每个生命周期
* 🚀 **高性能**，通过插件支持 PWA、以路由为单元的 code splitting 等
* 💈 **支持静态页面导出**，适配各种环境，比如中台业务、无线业务、[egg](https://github.com/eggjs/egg)、支付宝钱包、云凤蝶等
* 🚄 **开发启动快**，支持一键开启 [dll](https://umijs.org/plugin/umi-plugin-react.html#dll) 和 [hard-source-webpack-plugin](https://umijs.org/plugin/umi-plugin-react.html#hardSource) 等
* 🐠 **一键兼容到 IE9**，基于 [umi-plugin-polyfills](https://umijs.org/plugin/umi-plugin-react.html#polyfills)
* 🍁 **完善的 TypeScript 支持**，包括 d.ts 定义和 umi test
* 🌴 **与 dva 数据流的深入融合**，支持 duck directory、model 的自动加载、code splitting 等等

# Features
* 2016年接触react和redux栈时用的组合是react-redux：https://github.com/reactjs/react-redux + redux-thunk：https://github.com/gaearon/redux-thunk ，后来换到redux-saga：https://redux-saga.js.org/ 再后来看到支付宝团队的新架构Dvajs等业务方案：https://github.com/sorrycc/blog/issues/6 开始着手于这方面对的尝试，试着写了一些demo和一些商业产品。

* 基于市面上前后端众多的轮子和铺天盖地的框架，作者认为很多领域还是万变不离其宗吧。就像编程、设计、摄影...很多东西传递的思想和基础也在很慢的发生改变和升级，写组件、分治布局、通信、数据交流...，共同组成一个弹性可无限扩展的视觉空间。
# Guides
- [ES5 (Deprecated)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)
  - [React](https://github.com/airbnb/javascript/tree/master/react)
  - [CSS-in-JavaScript](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
  - [CSS & Sass](https://github.com/airbnb/css)
  - [Ruby](https://github.com/airbnb/ruby)

# Structure
```
├── package.json       # 项目依赖包及scripts
├── webpack.config.js  # 扩展或覆盖roadhog的默认配置项目
├── .webpackrc.js      # roadhog2.x配置文件
├── dist               # 打包静态目录(npm run build)
├── src                # 项目业务代码
│ ├── /assets/         # 静态文件
│ ├── /components/     # 公共组件
│ ├── /config/         # 路由、主题、菜单、系统data等配置项
│ ├── /layout/         # 平台布局 => header + content + footer + sidebar(可选)
│ ├── /models/         # model数据层
│ ├── /routes/         # 路由层
│ ├── /services/       # 服务api
│ ├── /styles/         # 全局样式 => core + mixin + function + theme...
│ ├── /utils/          # 全局工具函数
│ │──index.js          # 首页模板
│ │──index.js          # 全局app入口
│ │──route.js          # 全局路由入口
```
- Home(首页)
  - components => Header + content1 + content2 + ... + Footer
  - index.js
  - index.scss

- Exception
  - 403
  - 404
  - 500
  - 110

- User
  - Login
  - Register

```

# Usage

```bash
#本地开发
$ git clone git@github.com:PhotoArtLife/blog2.x-mux-club.git 请选择SSH方式
$ mkdir your-blog-name -> cd your-blog-name 
$ npm install
$ npm start # visit http://localhost:8000（或online ip支持同局域网移动端开发适配）

#线上部署
测试环境：
$ npm run build(可选)
$ ssh 

#Issue
npm install可能会出现部分依赖包安装不上的情况，可以试下国内代理的方式：npm install --registry=https://registry.npm.taobao.org