/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-19 00:25:36
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
    const childrenData = [
      {
        id: 1,
        title: '<img width="100%" src="http://kquanr.com/images/PhotoArtLife.png" />',
        content: '一个高效的页面动画解决方案',
        button: '下滑 Get More',
      },
      {
        id: 2,
        title: '<img width="100%" src="http://kquanr.com/images/PhotoArtLife.png" />',
        content: '一个高效的页面动画解决方案',
        button: 'Learn More',
      },
    ];
    const childrenToRender = banner.map(row => (
      <Element
        key={row.id}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${row.id}`}
          style={{ background: `url(${row.bgImg}) no-repeat center`, backgroundSize: 'cover' }}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${className}-title`}
          key="text"
        >
          <span
            className="logo"
            key="logo"
            dangerouslySetInnerHTML={{
              __html: row.title,
            }}
          />
          <p
            key="content"
          >
            {row.content}
          </p>
          <Button
            type="ghost"
            key="button"
          >
            {row.button}
          </Button>
        </QueueAnim>
      </Element>
    ));

    return (
      <OverPack
        playScale="0.1"
        className={`mux-layout-${className} banner`}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${className}-wrapper`}>
            <BannerAnim
              key="banner"
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

