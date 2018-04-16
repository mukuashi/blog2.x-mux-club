/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-26 12:25:27
 * @version 0.1 | 2018-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-16 20:36:03
*/
import React, { PureComponent } from 'react';
import { Icon, Button, Popover } from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { data } from 'config/system';
import { scrollTo } from 'utils';
import './index.scss';

const { footer } = data;

export default class GlobalFooter extends PureComponent {
  handleScrollToTop = () => {
    const tempId = 'header-banner';
    const anchorElement = document.getElementById(tempId);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      // 有动画滚动至顶方案
      scrollTo(0, 800);
      // old version无动画滚动置顶方案
      // anchorElement.scrollIntoView();
    }
  }
  render() {
    const appContent = (
      <div className="qrCodeMenu">
        <img src="https://ok4nxnxdy.qnssl.com/download-qr-20160303.png" alt="download-qrcode" />
      </div>
    );
    return (
      <OverPack playScale="0.2" className="footer-container">
        {
          footer.register && (
            <QueueAnim
              key="a"
              component="header"
              type={['top', 'bottom']}
              leaveReverse
            >
              <Button
                type="primary"
                size="large"
                href="/login/#/register/1"
                key="b"
              >
                {footer.register}
                <TweenOne
                  animation={{ x: '+=18', yoyo: true, repeat: -1, duration: 1800 }}
                  className="icon"
                  key="c"
                >
                  <Icon type="double-right" />
                </TweenOne>
              </Button>
            </QueueAnim>
          )
        }
        <QueueAnim
          key="d"
          delay={200}
          component="ul"
          type={['bottom', 'top']}
          className="footer-container-ul"
        >
          {
            footer.item.map(row => (
              <li key={row.id} className="footer-container-ul-li">
                <h2 key="e">{row.title}</h2>
                {
                  row.content.length > 0 && (
                    <ul key="f">
                      {
                        row.content.map(line => (
                          <li key={line.id}>
                            {
                              line.path === '#app' ? (
                                <Popover trigger="hover" title="扫码下载APP" content={appContent}>
                                  <a href={line.path}>{line.name}</a>
                                </Popover>
                              ) : <a className={line.disabled ? 'disabled' : ''} href={line.path}>{line.name}</a>
                            }
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
          }
        </QueueAnim>
        <TweenOne
          key="g"
          delay={200}
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          className="copyright"
        >
          <span key="h">
            {footer.copyright.reserved}
          </span>
          <span key="i">
            {footer.copyright.company}
          </span>
          <a key="j">
            {footer.copyright.number}
          </a>
        </TweenOne>
        <TweenOne
          onClick={this.handleScrollToTop}
          animation={{ y: '-=22', yoyo: true, repeat: -1, duration: 1600 }}
          className="toTop"
          style={{ bottom: 40 }}
          key="k"
        >
          <a><Icon type="up-circle" /></a>
        </TweenOne>
      </OverPack>
    );
  }
}

