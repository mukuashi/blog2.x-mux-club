/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Header
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-26 17:24:33
*/
import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Menu, Icon, Popover } from 'antd';
import { data } from 'config/system';
import styles from './index.scss';

const { Item, SubMenu } = Menu;
const { version, header } = data;
const { logo, nav, user, submenu, contact } = header;

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
  // handleScrollToTop = () => {
  //   const tempId = 'header-banner';
  //   const anchorElement = document.getElementById(tempId);
  //   // 如果对应id的锚点存在，就跳转到锚点
  //   if (anchorElement) {
  //     anchorElement.scrollIntoView();
  //     this.setState({
  //       mobileOpen: !this.state.mobileOpen,
  //     });
  //   }
  // }
  render() {
    const { mobileOpen } = this.state;
    const props = { ...this.props };
    const { isMobile, fixHeader, pathname } = props;
    const contactAuthor = (
      <div className={styles.headerPopoverContent}>
        <span>微信公众号 + 作者微信</span>
        <span>(连载中) + （摄/电影等媒体合作）</span>
        <ul>
          {
            contact.block.map(row => (
              <li key={row.id}>
                <img src={row.img} alt={row.alt} />
              </li>
            ))
          }
        </ul>
      </div>
    );
    const userTitle = (
      <div>
        <span className="img">
          <img
            alt="PhotoArtLife"
            src={user.img}
            width="36"
            height="36"
          />
        </span>
        <span>{user.name}</span>
      </div>
    );
    const navChildren = Object.values(nav).map(row => (
      <Item key={row.id} className={row.path === pathname.replace(version, '') ? 'ant-menu-item-selected' : ''}>
        {
          row.isReact ? <Link to={row.path}>{row.name}</Link> : <a href={row.url} target={row.target}>{row.name}</a>
        }
      </Item>
    ));
    navChildren.push(
      <Item className="menu-contact" key="contact">
        <Popover
          content={contactAuthor}
          title=""
          trigger="hover"
          placement={isMobile ? "bottomRight" : "bottom"}
          arrowPointAtCenter
        >
          <Icon type="wechat" />
          <span>联系作者</span>
        </Popover>
      </Item>,
      <SubMenu className="menu-user" title={userTitle} key="user">
        {
          submenu.map(row => (
            <Item key={row.id}>
              {
                !row.href && <h4 className={isMobile ? styles.avatarVersion : ''}>{row.name}</h4>
              }
              {
                row.href && <Link to={row.href} target={row.target} className={styles.avatarInfo}>{row.name}</Link>
              }
            </Item>
          ))
        }
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
          <a href="/">
            <img alt="header-logo" width="100%" src={logo} />
          </a>
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
