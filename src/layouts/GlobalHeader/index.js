/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Header
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @version 0.1 | 2017-09-06 // update jsx and antd ui.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-06 19:20:35
*/
import React, { PureComponent } from 'react';
import Link from 'umi/link';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Menu, Popover, Avatar } from 'antd';
import Iconfont from "@/components/Iconfont";
import systemData from '@/locales/zh-CN';
import styles from './index.scss';

const { Item, SubMenu } = Menu;
const { version, header } = systemData;
const { logo, nav, user, submenu, contact } = header;

export default class GlobalHeader extends PureComponent {
    state = {
        mobileOpen: false,
    }

    // 切换移动端menu
    handleToggleMobile = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen,
        })
    }

    render() {
        const { mobileOpen } = this.state;
        const props = { ...this.props };
        const { isMobile, fixHeader, pathname } = props;
        const contactAuthor = (
            <div className={styles.headerPopoverContent}>
                <span>社区（连载中） + WeChat</span>
                <span>UED、技术、摄/电影、媒体等合作</span>
                <ul>{
                    contact.block.map(row => (<li key={row.id}><img src={row.img} alt={row.alt} /></li>))
                }
                </ul>
            </div>
        );

        const userTitle = (
            <div>
                <Avatar src={user.img} />
                <span>{user.name}</span>
            </div>
        );

        const navChildren = Object.values(nav).map(row => (
            <Item key={row.id} className={row.path === pathname ? 'ant-menu-item-selected' : ''}>
                {
                    row.isReact ? <Link to={row.path}>{row.name}</Link> : <a href={row.url} target={row.target}>{row.name}</a>
                }
            </Item>
        ));

        navChildren.push(
            <Item className="menu-contact" key="contact">
                <Popover
                  content={contactAuthor}
                  title="百度/谷歌搜索PhotoArtLife，也可以找到作者哈！"
                  trigger="hover"
                  placement={isMobile ? "bottomRight" : "bottom"}
                  arrowPointAtCenter
                >
                    <div>
                        <Iconfont type="wechat" size="1x-sm" />
                        <span>联系作者</span>
                    </div>
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
                                row.href && <a href={row.href} target={row.target} className={styles.avatarInfo}>{row.name}</a>
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
