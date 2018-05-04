import React, { PureComponent } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Iconfont from "components/Iconfont";
import { data } from 'config/system';

const { block } = data.content1;

export default class Content1 extends PureComponent {

  static defaultProps = {
    className: 'content1',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const children = block.map(item => {
      const delay = this.getDelay(item.id);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 };
      return (
        <TweenOne
          component="li"
          animation={liAnim}
          key={item.id}
        >
          <TweenOne
            animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className="img"
            key="a"
          >
            <Iconfont type={item.icon} />
          </TweenOne>
          <div className="text">
            <TweenOne key="h1" animation={childrenAnim} component="h1">
              {item.title}
            </TweenOne>
            <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
              {item.content}
            </TweenOne>
          </div>
        </TweenOne>
      );
    });
    return (
      <section {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
            阿里云提供基础的环境即服务
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            博客基于React、Redux、Dvajs、Node.js等技术栈构建
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </section>
    );
  }
}
