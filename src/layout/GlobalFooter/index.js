/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-19 19:53:16
*/
import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button, Icon, notification } from 'antd';
import Iconfont from "components/Iconfont";
import { data } from 'config/system';
import { scrollTo } from 'utils';
import './index.scss';

const { logo, block, copyright, info } = data.footer;

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };



  // map
  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item),
      hoverTitle = data.hoverTitle.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.split('MKSIcon@')[1];
        return (
          <li className={isImg ? 'icon' : ''} key={ii}>
            <a href={links[ii]} target="_blank">
              {isImg ? <i className={`micon micon-1x-bg micon-${isImg}`} title={hoverTitle[ii]} /> : cItem}
            </a>
          </li>
        );
      });
    return (
      <li className={data.className} key={i} >
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>
    )
  }
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
    const { isMobile } = props;

    return (
      <OverPack
        {...props}
        playScale={isMobile ? 0.5 : 0.1}
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
                        <a href={second.path} target="_blank">
                          {
                            second.icon ? <Iconfont type={second.icon} /> : second.name
                          }
                        </a>
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
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          className="copyright"
        >
          <span>
            {copyright.number}
            <em>{copyright.reserved}</em>
            <p>
              <a onClick={this.openNotification}>{info.version}</a>
              Crafted By
              <a href="//photoartlife.lofter.com"> PhotoArtLife </a>
              | Referenced By
              <Link target="_blank" to="https://reactjs.org"> Facebook React </Link>
              | Powered By
              <a href="//kquanr.com"> mukuashi </a>
              Design For Life
            </p>
          </span>
        </TweenOne>
        <TweenOne
          key="d"
          onClick={this.handleScrollToTop}
          animation={{ y: '-=30', yoyo: true, repeat: -1, duration: 1600 }}
          className="toTop"
          style={{ bottom: 40 }}
        >
          <a><Icon type="up-circle" /></a>
        </TweenOne>
      </OverPack>
    );
  }
}
