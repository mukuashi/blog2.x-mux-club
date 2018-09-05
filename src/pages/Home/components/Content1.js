import React, { PureComponent } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Iconfont from "@/components/Iconfont";
import systemData from '@/locales/zh-CN';

const { text, block } = systemData.content1;

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
            key="a"
            animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className="img"
          >
            <Iconfont type={item.icon} />
          </TweenOne>
          <div className="text">
            <TweenOne
              key="b"
              animation={childrenAnim}
              component="h1"
            >
              {item.title}
            </TweenOne>
            <TweenOne
              key="c"
              animation={{ ...childrenAnim, delay: delay + 200 }}
              component="p"
            >
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
        >
          <TweenOne
            key="d"
            animation={oneAnim}
            component="h1"
            reverseDelay={100}
          >
            {text.title}
          </TweenOne>
          <TweenOne
            key="e"
            component="p"
            animation={{ ...oneAnim, delay: 100 }}
          >
            {text.subtitle}
          </TweenOne>
          <QueueAnim
            key="f"
            type="bottom"
            component="ul"
          >
            {children}
          </QueueAnim>
        </OverPack>
      </section>
    );
  }
}
