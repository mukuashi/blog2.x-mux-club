import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const videoChildren = 'https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.mp4',
          videoPoster = 'https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.jpg?v1';
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={animation}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            一个文青患者的富媒体之路
          </TweenOne>
          <TweenOne
            animation={{ ...animation, delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            我想，曾经选择去敲代码、写稿、拍片子、画图等等，不论何种缘由，总有一些真正喜欢和热爱的，那么过往在未知世界里寻找自己的这些方式，终是成长与经历。
          </TweenOne>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            className={`${props.className}-video`}
            id={`${props.id}-video`}
          >
            {isMode ?
              (
                <video
                  src={videoChildren}
                  poster={videoPoster}
                  width="100%"
                  loop />)
            :
              (
                <VideoPlay
                  loop
                  src={videoChildren}
                  poster={videoPoster}
                  width="100%" />)
            }
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;