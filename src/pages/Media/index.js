import React, { PureComponent } from 'react';
import { Timeline, Icon } from "antd";
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { connect } from 'dva';
import './index.scss';

const { Item } = Timeline;

class Media extends PureComponent {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <article className="media-content-list">
        <section className={`content-template-wrapper ${props.className}-wrapper`}>
          <OverPack
            className={`content-template ${props.className}`}
          >
            <TweenOne
              key="d"
              animation={oneAnim}
              component="h1"
              reverseDelay={100}
            >
              Project And Media Plus
            </TweenOne>
            <TweenOne
              key="e"
              component="p"
              animation={{ ...oneAnim, delay: 100 }}
            >
              版本迭代和服务升级，关于经历和部分作品@PhotoArtLife
            </TweenOne>
            <Timeline mode="alternate">
              <Item dot={<Icon type="clock-circle" theme="twoTone" style={{ fontSize: '16px' }} twoToneColor="#52c41a" />}>2015-01-01，1.x created and published.
              </Item>
              <Item color="pink">UI、UX、UED、Photography，JiNan University</Item>

              <Item dot={<Icon type="skin" theme="twoTone" style={{ fontSize: '16px' }} />}>2015-09-01，FE、RD、UE... Join BaiDu ZuoYeBang</Item>
              <Item dot={<Icon type="smile" theme="twoTone" style={{ fontSize: '16px' }} />}>2016-08-01，2.x created and published</Item>
              <Item color="pink">Coding、Create Products、UED、Photography，Join XiaoMi</Item>
              <Item dot={<Icon type="heart" theme="twoTone"  style={{ fontSize: '16px' }} />}>2018-07-01，3.x created and published</Item>
              <Item color="pink">Design、UED、Studio、Lab、Photography</Item>
              <Item dot={<Icon type="camera" twoToneColor="#584F60" style={{ fontSize: '16px' }} />}>2018-07-09，Sports And Fitness、join Keep</Item>
              <Item color="pink">A Creator、Asako Studio Founder</Item>
              <Item dot={<Icon type="home"  style={{ fontSize: '16px' }} />}>2020-01-01，4.x and 5.x miniprogram published</Item>
              <Item color="pink">Photographer、Independent Designer、Full Stack Developer、Engineer、Producer、Touring Blogger etc. </Item>
              <Item dot={<Icon type="qq"  style={{ fontSize: '16px' }} />}>2020-05-07，Join Tencent CSIG</Item>
            </Timeline>
          </OverPack>
        </section>
      </article>
    );
  }
}

export default connect(({ global }) => ({
  ismobile: global.ismobile,
}))(Media);