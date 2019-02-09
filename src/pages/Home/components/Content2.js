import React, { PureComponent } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';
// @version 2.1视频设备解决方案-后续完善
// import plyr from 'plyr';
import app from '@/locales/zh-CN';

const { text, video } = app.content2;

export default class Content2 extends PureComponent {
  static defaultProps = {
    className: 'content2',
  };

  render() {
    const props = { ...this.props };
    const ismobile = JSON.parse(props.ismobile);
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <section {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="a"
            animation={animation}
            component="h1"
            reverseDelay={300}
          >
            {text.title}
          </TweenOne>
          <TweenOne
            key="b"
            component="p"
            animation={{ ...animation, delay: 200 }}
            reverseDelay={200}
          >
            {text.subtitle}
          </TweenOne>
          <TweenOne
            key="c"
            animation={{ ...animation, delay: 300 }}
            className={`${props.className}-video`}
          >
            {
              ismobile ? (
                <video
                  controls
                  loop
                  preload="none"
                  src={video.url}
                  poster={video.cover}
                  width="100%"
                  muted
                />
              )
                :
                (
                  <VideoPlay
                    loop
                    src={video.url}
                    poster={video.cover}
                    width="100%"
                    preload="none"
                  />
                )
            }
          </TweenOne>
        </OverPack>
      </section>
    );
  }
}