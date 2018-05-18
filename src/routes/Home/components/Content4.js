import React, { PureComponent } from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Gallery from 'react-grid-gallery';
import { data } from 'config/system';

const { media } = data;
const { text, block } = data.content4;
export default class Content extends PureComponent {

  static defaultProps = {
    className: 'content4',
  };

  getEnterAnim = (e, isMobile) => {
    const index = e.index;
    const delay = isMobile ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const { isMobile } = props;
    return (
      <section {...props} className="content-template-wrapper content4-wrapper">
        <OverPack location={props.id} className={`content-template ${props.className}`}>
          <TweenOne
            key="a"
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            reverseDelay={300}
          >
            {text.title}
          </TweenOne>
          <TweenOne
            key="b"
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
            component="p"
            reverseDelay={200}
          >
            {text.subtitle}
            {
              media.map(row => (
                <span key={row.id}>
                  <a href={row.url} target="_blank">{row.name}</a>{row.after}
                </span>
              ))
            }
          </TweenOne>
          <TweenOneGroup
            key="c"
            className={`${props.className}-img-wrapper`}
            enter={(e) => this.getEnterAnim(e, isMobile)}
            // enter={[
            //   { opacity: 0, duration: 0, type: 'from', delay: 400 },
            //   { ease: 'easeOutCubic', type: 'from', left: '0%' },
            // ]}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
          >
            <Gallery
              // id={`${props.className}-img-wrapper-gallery`}
              margin={5}
              images={block}
              showLightboxThumbnails         // 弹层后显示底部预览幻灯片缩略图
              backdropClosesModal            // 弹层后点击其他地方支持遮罩关闭
              enableImageSelection={false}   // 去掉多选checkbox
            />
          </TweenOneGroup>
        </OverPack>
      </section>
    );
  }
}
