/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Header Banner
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @version 0.2 | 2017-06-26 // 更新button配置项.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-27 16:24:49
*/
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { data } from 'config/system';
import { scrollTo } from 'utils';
import 'rc-banner-anim/assets/index.css';
import './index.scss';

const { BgElement } = Element;
const { banner } = data;
const yAnim = {
  type: 'from', ease: 'easeInOutQuad', duration: 200,
};
//
export default class BannerHeader extends PureComponent {
  static defaultProps = {
    className: 'banner',
  };
  static propTypes = {
    className: PropTypes.string,
  }
  handleRollDown = () => {
    const { isMobile } = this.props;
    const dimHeight = isMobile ? 120 : 50;
    // 计算第一屏的高度px
    const firstScreenHeight = document.getElementById('banner').offsetHeight;
    // document.querySelector('.banner')
    // 有动画滚动方案
    scrollTo(firstScreenHeight - dimHeight, 1000);
  }
  render() {
    const { className } = this.props;
    const childrenToRender = banner.map(row => (
      <Element
        key={row.id}
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="a"
          className={`bg bg${row.id}`}
          style={{ background: `url(${row.bgImg}) no-repeat center`, backgroundSize: 'cover' }}
        />
        <QueueAnim
          key="b"
          type={['bottom', 'top']}
          delay={200}
          className={`${className}-title`}
        >
          <span
            key="c"
            className="bannerHeader"
          >
            <img src={row.headerImg} alt="header-banner" />
          </span>
          <p key="d">{row.content}</p>
          <QueueAnim
            animation={{ ...yAnim, delay: 500 }}
            delay={300}
            component="ul"
            key="e"
          >
            {
              row.button.map(second => (
                <li key={`li${second.id}`}>
                  <Button
                    key={second.id}
                    type="ghost"
                    href={second.link}
                    target={second.target}
                    onClick={second.event ? this.handleRollDown : null}
                  >
                    {second.value}
                    {
                      second.icon && (
                        <TweenOne
                          animation={{ ...second.animate, yoyo: true, repeat: -1, duration: 2400 }}
                          className="icon"
                          key={`icon${second.id}`}
                        >
                          <Icon type={second.icon} />
                        </TweenOne>
                      )
                    }
                  </Button>
                </li>
              ))
            }
          </QueueAnim>
        </QueueAnim>
      </Element>
    ));

    return (
      <OverPack
        replay                   // 每次显示当前时是否都要动画, false 为只上往下滚时才有动画
        playScale={[0.3, 0.9]}   // https://motion.ant.design/api/scroll-anim
        className={`mux-layout-${className} banner`}
        id="banner"
      >
        <TweenOneGroup
          key="f"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${className}-wrapper`}>
            <BannerAnim
              autoPlay
              autoPlaySpeed={6666}
              key="g"
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=30', yoyo: true, repeat: -1, duration: 1650 }}
          className={`${className}-icon`}
          style={{ bottom: 40 }}
          key="h"
        >
          <Icon type="down" onClick={this.handleRollDown} />
        </TweenOne>
      </OverPack>
    );
  }
}

