/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-26 19:24:44
*/
import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Button, Icon, notification } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Iconfont from "components/Iconfont";
import { data } from 'config/system';
import { scrollTo } from 'utils';
import './index.scss';

const { logo, block, copyright, info } = data.footer;

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };
  //
  handleScrollToTop = () => {
    // 有动画滚动至顶方案
    scrollTo(0, 800);
  }
  // version notice
  openNotification = () => {
    const btnReturn = (
      <Button
        type="primary"
        size="default"
        onClick={() => {
          window.location.href = 'http://kquanr.com'
        }}
      >
        返回旧版
      </Button>
    );
    notification.open({
      message: 'Hey，欢迎访问 PhotoArtLife',
      description: '当前版本：2.x\n。\n其为2016年及至今的博客新版本，老版本可以在首页切换（当前toast浮层会在3秒后自动关闭）。',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      duration: 3,
      btn: btnReturn,
    });
  }

  render() {
    const props = { ...this.props };
    return (
      <OverPack
        {...props}
        playScale="0.1"
      >
        <QueueAnim key="a" type="bottom" component="ul" leaveReverse>
          <li key="b">
            <p className="logo">
              <img src={logo.img} alt="footer-logo" />
            </p>
            <p>{logo.content}</p>
          </li>
          {
            block.map(row => (
              <li key={row.id}>
                <h2>{row.title}</h2>
                <ul>
                  {
                    row.content.map(second => (
                      <li key={second.id}>
                        <Link to={second.path} target="_blank">
                          {
                            second.icon ? <Iconfont size="1x-bg" type={second.icon} title={second.name} /> : second.name
                          }
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </QueueAnim>
        <TweenOne
          key="c"
          onClick={this.handleScrollToTop}
          animation={{ y: '-=36', yoyo: true, repeat: -1, duration: 1600 }}
          className="toTop"
          style={{ bottom: 20 }}
        >
          <a><Icon type="up-circle" /></a>
        </TweenOne>
        <TweenOne
          key="d"
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          className="copyright"
        >
          <p>
            {copyright.number}
            <em>{copyright.reserved}</em>
            <span>
              <a onClick={this.openNotification}>{info.version}</a>
              Just Blog Stage | Referenced By
              <Link to="https://reactjs.org" target="_blank"> Facebook React </Link>
              & <Link to="https://github.com/dvajs/dva" target="_blank"> Dvajs </Link>
              | Powered By
              <Link to="//photoartlife.lofter.com" target="_blank"> PhotoArtLife·跨世 </Link>
              Design For Life
            </span>
          </p>
        </TweenOne>
      </OverPack>
    );
  }
}
