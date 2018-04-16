/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Basic Layout Design => common header + common footer + content
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-23 12:25:27
 * @version 0.1 | 2018-03-23 // Initial version.
 * @version 0.2 | 2018-04-11 // fix chrome切换到移动端报错未销毁事件bug.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-16 22:02:33
*/
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'dva/router';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { getRoutes, getScrollTop } from 'utils';
import { data } from 'config/system';
import BannerHeader from 'layout/BannerHeader';
import Home from 'routes/Home';
import NotFound from 'routes/Exception/404';
import ErrorPage from 'routes/Exception/110';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';
import styles from './index.scss';

const { banner } = data;
const cx = classNames.bind(styles);
const { Content, Header, Footer } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1390,
  },
  'screen-xxl': {
    minWidth: 1391,
  },
};
// 移动端
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      fixHeader: false, // 置顶nav menu
    };
  }
  componentDidMount() {
    this.enquireHandler = enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    });
    window.addEventListener('scroll', this.handleScrollCheck, false);
  }
  componentWillUnmount() {
    // 滚屏header
    window.removeEventListener('scroll', this.handleScrollCheck, false);
    // 移动端uncheck
    unenquireScreen(this.enquireHandler);
  }
  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);
    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      return '/';
    }
    return redirect;
  }
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '2.x-Blog For PhotoArtLife@mukuashi';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${title}`;
    }
    return title;
  }
  // 公共banner img
  // converBanner() {
  //   const path = this.props.location.pathname;
  //   const bannerObj = banner[path];
  //   if (bannerObj && bannerObj.img) {
  //     return bannerObj;
  //   } else {
  //     return { img: '', content: '', button: '' };
  //   }
  // }
  // 滚屏与置顶菜单状态切换
  handleScrollCheck = () => {
    // 设置滚屏默认高度为200px,超过后将会切换导航栏
    const DEFAULT_SCROLL_HEIGHT = 90;
    const toggleHeader = (value) => {
      setTimeout(() => {
        this.setState({
          fixHeader: value,
        });
      }, 5);
    };
    if (getScrollTop() > DEFAULT_SCROLL_HEIGHT) {
      toggleHeader(true);
    } else {
      toggleHeader(false);
    }
  }
  //
  render() {
    const { fixHeader } = this.state;
    const { routerData, match, location } = this.props;
    const bashRedirect = this.getBashRedirect();
    const classLayoutContainer = cx({
      'mux-layout': true,
    });
    const classLayoutHeader = cx({
      'mux-layout-header': true,
    });
    const classLayoutContent = cx({
      'mux-layout-content': true,
    });
    const classLayoutFooter = cx({
      'mux-layout-footer': true,
    });
    // const bannerdata = this.converBanner();
    const layout = (
      <Layout className={classLayoutContainer}>

        <Header className={classLayoutHeader}>
          <GlobalHeader
            pathname={location.pathname}
            fixHeader={fixHeader || false}
            isMobile={this.state.isMobile || false}
          />
        </Header>
        {/*
        <div
          className="mux-layout-banner"
          onScroll={this.handleScrollCheck}
        >
          <BannerHeader
            bannerdata={bannerdata}
          />
        </div>
        */}

        <Content className={classLayoutContent}>
          {/* 其他页面 */}
          <Switch>
            {
              getRoutes(match.path, routerData).map(item =>
                (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                    redirectPath="/exception/403"
                  />
                )
              )
            }
            <Route exact path="/" component={Home} />
            <Redirect from="/home" to={bashRedirect} />
            <Route render={NotFound} />
            <Route render={ErrorPage} />
          </Switch>
        </Content>
        <Footer className={classLayoutFooter}>
          {/*
            <GlobalFooter
            isMobile={this.state.isMobile || false}
          />
          */}
        </Footer>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()} >
        <ContainerQuery query={query}>
          {
            params => (
              <div className={classNames(params)}>
                {layout}
              </div>
            )}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}
