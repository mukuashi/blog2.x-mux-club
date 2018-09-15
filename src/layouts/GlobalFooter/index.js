/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-15 00:50:15
*/
import React, { PureComponent } from 'react';
import { Button, Icon, notification, Tooltip, Card, Badge, BackTop } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Link from 'umi/link';
import Texty from 'rc-texty';
import Iconfont from "@/components/Iconfont";
import systemData from '@/locales/zh-CN';
import { scrollTo } from '@/utils';
import defaultSettings from '../../../config/settings.config';
import './index.scss';

const { logo, version, block, copyright, info } = systemData.footer;

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  //
  handleScrollToTop = () => {
    // 有动画滚动至顶方案
    scrollTo(0, 500);
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
        返回1.x版
      </Button>
    );
    notification.open({
      message: 'Hey，欢迎访问 PhotoArtLife',
      description: '当前版本：2.x\n，2016年之后的博客第二版，老版本可以在首页切换（5秒后关闭），博客最后更新时间：2018年6月。',
      icon: <Icon type="smile" theme="filled" style={{ color: '#108ee9' }} />,
      duration: 6,
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
            <Texty type='scale' mode="smooth">{logo.content}</Texty>
            <Card title={version.title} bordered={false}>
              {
                version.list.map(row => (
                  <p key={row.id}>
                    <Badge status={row.status} />
                    {
                      row.path ? (row.path.includes(defaultSettings.version)
                        ? <Link to={row.path} className="actived">{row.name}</Link>
                        : <a href={row.path}>{row.name}</a>)
                        : <span>{row.name}</span>
                    }
                  </p>
                ))
              }
            </Card>
          </li>
          {
            block.map(row => (
              <li key={row.id}>
                <h2>{row.title}</h2>
                <ul>
                  {
                    row.content.map(second => (
                      <li key={second.id}>
                        <a href={second.path} target={second.target ? '_self' : '_blank'}>
                          {
                            second.icon
                              ? <Tooltip
                                title={second.name}
                                placement="top"
                              >
                                <Iconfont
                                  size="1x-bg"
                                  type={second.icon}
                                />
                                </Tooltip>
                              : second.name
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

        <BackTop>
          <TweenOne
            key="c"
            animation={{ y: '-=25', yoyo: true, repeat: -1, duration: 1600 }}
            className="footer-up"
            style={{ bottom: 0 }}
          >
            <a>
              <Icon type="up-circle" theme="filled" />
            </a>
          </TweenOne>
        </BackTop>
        <TweenOne
          key="d"
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          className="copyright"
        >
          <Texty>
            {copyright.number + copyright.reserved}
          </Texty>
          <p>
            <a onClick={this.openNotification}>{info.version}</a>
            Just Blog Stage | Referenced By
              <Link to="//reactjs.org" target="_blank"> Facebook React </Link>
            & Ant Design
              <Link to="//dvajs.com" target="_blank"> DvaJS </Link>
            &
              <Link to="//umijs.org" target="_blank"> UmiJS </Link>
            | Powered By
              <Link to="//photoartlife.lofter.com" target="_blank"> PhotoArtLife</Link>
          </p>
          <Texty delay={400} type='scaleBig' mode='reverse'>
            Design For Life By MUKUASHI | MUX Studio
          </Texty>
          <Icon type="smile" theme="filled" style={{ color: '#52c41a', marginRight: '.6rem' }} />
          <Icon type="heart" theme="filled" style={{ color: '#f43e55' }} />
        </TweenOne>
      </OverPack>
    );
  }
}
