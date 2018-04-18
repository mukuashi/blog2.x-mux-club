/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Header
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-26 12:25:27
 * @version 0.1 | 2018-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-19 04:47:42
*/
import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Menu, Icon, Popover } from 'antd';
import { data } from 'config/system';
import styles from './index.scss';

const { Item, SubMenu } = Menu;
const { logo, nav } = data.header;

export default class GlobalHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }
  // 切换移动端menu
  handleToggleMobile = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  }
  // 切换router置顶
  handleScrollToTop = () => {
    const tempId = 'header-banner';
    const anchorElement = document.getElementById(tempId);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView();
      this.setState({
        mobileOpen: !this.state.mobileOpen,
      });
    }
  }
  render() {
    const { mobileOpen } = this.state;
    const props = { ...this.props };
    const { isMobile, fixHeader, pathname } = props;
    const contactAuthor = (
      <div>
        <p>
          <img alt="微信平台" src="http://kquanr.com/arts/images/photoartlife.jpg" width="135px" />
          <img alt="作者微信" src="http://kquanr.com/arts/images/private-wechat.jpg" width="135px" />
        </p>
      </div>
    );
    const userTitle = (
      <div>
        <span className="img">
          <img
            alt="PhotoArtLife"
            src="http://kquanr.com/images/now1.png"
            width="36"
            height="36"
          />
        </span>
        <span>Mich</span>
      </div>
    );
    const navChildren = Object.values(nav).map(row => (
      <Item key={row.id} className={row.path === pathname ? 'ant-menu-item-selected' : ''}>
        {
          row.path.includes('http') ? <a href={row.path} target="_blank">{row.name}</a> : <Link to={row.path}>{row.name}</Link>
        }
      </Item>
    ));
    navChildren.push(
      <Item className="menu-contact" key="contact">
        <Popover
          content={contactAuthor}
          title="微信公共平台 + 约片投稿微信 >>> 技术交流等"
          trigger="hover"
          placement="bottom"
          arrowPointAtCenter
        >
          <Icon type="wechat" />
          <span>联系作者</span>
        </Popover>
      </Item>,
      <SubMenu className="menu-user" title={userTitle} key="user">
        <Item key="a">用户：mukuashi</Item>
        <Item key="b">
          <a href="http://t.cn/Rt1xb42" target="_blank" style={styles.avatarSet}>微信专栏</a>
        </Item>
        <Item key="c">
          <a href="http://kquanr.com" style={styles.avatarSet}>回到旧版</a>
        </Item>
      </SubMenu>
    );
    const navTopMenu = (
      <TweenOne
        delay={300}
        className="header-nav"
        type={['left', 'right']}
        ease={['easeOutQuart', 'easeInOutQuart']}
      >
        <Menu mode="horizontal">
          {navChildren}
        </Menu>
      </TweenOne>
    );
    return (
      <TweenOneGroup
        component="header"
        className={fixHeader ? 'header header-fixheader' : 'header'}
        enter={{ y: -80, opacity: 0, type: 'from' }}
        leave={{ y: -80, opacity: 0 }}
      >
        <TweenOne
          className="header-logo"
          animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        >
          <Link to="/"><img alt="header-logo" width="100%" src="http://kquanr.com/images/header_nav.png" /></Link>
        </TweenOne>
        {
          isMobile ? (
            <div className={`header-mobile-nav${mobileOpen ? ' open' : ''}`}>
              <div className="header-mobile-nav-bar" onClick={this.handleToggleMobile}>
                <em />
                <em />
                <em />
              </div>
              <div
                className="header-mobile-nav-text"
              >
                <Menu
                  defaultSelectedKeys={['0']}
                  mode="inline"
                  theme="dark"
                >
                  {navChildren}
                </Menu>
              </div>
            </div>
          ) : (
              navTopMenu
            )
        }
      </TweenOneGroup>
    );
  }
}
