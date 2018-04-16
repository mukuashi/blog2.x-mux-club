/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Banner
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-26 12:25:27
 * @version 0.1 | 2018-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-16 21:56:09
*/
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import 'rc-banner-anim/assets/index.css';
import './index.scss';

const { BgElement } = Element;
const yAnim = {
  type: 'from', ease: 'easeInOutQuad', duration: 300,
};

export default class BannerHeader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'banner',
  };

  render() {
    const { bannerdata } = this.props;

    const childrenToRender = (
      <Element
        key="bg-box"
        prefixCls="banner-user-elem"
      >
        <BgElement
          id="header-banner"
          className="bg-banner"
          key="bg"
          scrollParallax={{ y: 200 }}
          style={{ backgroundImage: `url(${bannerdata.img})` }}
        />
        <QueueAnim
          type={['left', 'right']}
          delay={300}
          className={`bg-text${classBoxCondition('text')}`}
          key="text"
        >
          <TweenOne component="span" className={`title${classTitleStyle(bannerdata.content)}`} key="title" animation={{ ...yAnim, delay: 400 }}>{bannerdata.content && bannerdata.content.title}<br />{bannerdata.content && bannerdata.content.title1}
          </TweenOne>
          <TweenOne component="p" className="name" key="name" animation={{ ...yAnim, delay: 500 }}>
            {bannerdata.content && bannerdata.content.cnName}
          </TweenOne>
        </QueueAnim>
        <QueueAnim
          type={['bottom', 'top']}
          delay={600}
          className={`bg-btn${classBoxCondition('button')}`}
          key="button"
        >
          {
            bannerdata.button && (
              <Button
                type="primary"
                size="large"
                key="button"
                href={bannerdata.button.link ? bannerdata.button.link : '/login/#/register/1'}
              >
                {bannerdata.button.value}
                <TweenOne
                  animation={{ x: '+=18', yoyo: true, repeat: -1, duration: 1800 }}
                  className="icon"
                  key="icon"
                >
                  <Icon type={bannerdata.button.icon} />
                </TweenOne>
              </Button>
            )
          }
        </QueueAnim>
      </Element>
    );

    return (
      <OverPack
        {...this.props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
            style={bannerdata.height ? { minHeight: bannerdata.height } : {}}
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
      </OverPack>
    );
  }
}
