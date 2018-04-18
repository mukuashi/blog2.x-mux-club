/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @version 0.2 | 2017-06-26 // 更新button配置项.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-19 04:23:52
*/
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { data } from 'config/system';
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
            className="logo"
            dangerouslySetInnerHTML={{
              __html: row.title,
            }}
          />
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
                  >
                    {second.value}
                    {
                      second.icon && (
                        <TweenOne
                          animation={{ ...second.animate, yoyo: true, repeat: -1, duration: 2200 }}
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
        playScale="0.1"
        className={`mux-layout-${className} banner`}
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
          animation={{ y: '-=35', yoyo: true, repeat: -1, duration: 1500 }}
          className={`${className}-icon`}
          style={{ bottom: 40 }}
          key="h"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

