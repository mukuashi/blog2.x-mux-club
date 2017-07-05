import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content3',
  };

  state = {
    show: 0,
  };

  onChange = (key) => {
    this.setState({ show: parseInt(key) })
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag;
    const img = item.img;
    const text = item.text;
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          <i className={"micon micon-" + tag.icon }></i>
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=""
        >
          {this.state.show === i && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = [
      {
        tag: {
          tag: '年级',
          icon: 'one'
        },
        img: <img width="100%" src="https://cdn.dribbble.com/users/285475/screenshots/1792557/werewolf-big7.gif" />,
        text: `<h3>设计</h3>UI & UX，在某广告公司做广告传媒与平面设计等工作。
                <h3>编程</h3>计算机课程学习与校内外兼职实习工作。
                <h3>写作</h3>随笔、小散文、公号文章、专栏博客等。
                <h3>比赛</h3>非职业自由赛（如例华为杯、ACM等）、微电影比赛等。`
      },
      {
        tag: {
          tag: '年级',
          icon: 'two'
        },
        img: <img width="100%" src="https://cdn.dribbble.com/users/285475/screenshots/3618358/skate_apple_dribbble.gif" />,
        text: ` <h3>摄影</h3>摄影入门与非科班学习。
                <h3>设计</h3>UI与动画、微电影与自媒体兼职等。
                <h3>编程</h3><a href="http://kquanr.com" target="_blank">博客</a>与Web软件设计学习、编程项目实战。
                <h3>写作</h3>连载<a href="http://t.cn/Rt1xb42" target="_blank">专栏与公号文章</a>等。
                <h3>创业</h3>和合伙人一起做在线讲师培训行业。`
      },
      {
        tag: {
          tag: '年级',
          icon: 'three'
        },
        img: <img width="100%" src="https://cdn.dribbble.com/users/99875/screenshots/1458439/pharrell_drib.gif" />,
        text: `<h3>工作</h3>在百度的一个子产品<a href="https://www.zuoyebang.com" target="_blank">作业帮</a>实习，研发@前端坑。
                <h3>设计</h3>业余非职业爱好，不间断做些小东东。
                <h3>摄影</h3>爬山涉水，痴想敛天下之<a href="http://photoartlife.lofter.com" target="_blank">风光</a>等。
                <h3>写作</h3>游记记录与<a href="http://t.cn/Rt1xb42" target="_blank">各平台作品更新</a>。`
      },
      {
        tag: {
          tag: '年级',
          icon: 'four'
        },
        img: <img width="100%" src="https://cdn.dribbble.com/users/6084/screenshots/2448824/icns.gif" />,
        text: `<h3>工作</h3>在<a href="//www.miui.com" target="_blank">小米MIUI</a>做短视频产品@全职前端工程师等。
                <h3>产品</h3>UGC App<a href="//wg.miui.com" target="_blank">围观小视频</a>
                、PGC App<a href="//xk.miui.com" target="_blank">想看视频</a>
                、PGC作者平台<a href="//open.xk.miui.com" target="_blank">想看开放平台</a>
                、UGC审核后台<a href="//mp.wg.miui.com" target="_blank">围观CRM</a>
                、PGC审核后台<a href="//mp.xk.miui.com" target="_blank">想看CRM</a>等。
                <h3>摄影</h3>工作之余试着走遍中原北方，<a href="http://photoartlife.lofter.com" target="_blank">拍片</a>也是为了讨好自己。
                <h3>设计</h3>一来可以设计出自己想要的View，二来拍片后期需要修图等也派上了用场。<br/>
                <a href="//kquanr.com/mukuashi" target="_blank">2017·济南大学毕设答辩@mukuashi</a>
                <h3>写作</h3>我想这是作者若干年来坚持最久的爱好和习惯了，并不一定非要闭关创作极好的作品，但每一种坚持和信仰足矣让自己欣慰和满足。`
      },
      {
        tag: {
          tag: '现在及未来',
          icon: 'cafe'
        },
        img: <img width="100%" src="https://cdn.dribbble.com/users/605899/screenshots/2181211/400x300.gif" />,
        text: `<h3>工作</h3>还是大部分时间的研发岗，小部分私人时间的摄影与创作空间。人出来了、长大了总要去做些感动人心的产品才能有所怀念。这一点，记得好像听雷总说过，永远相信美好的事情即将发生！当然，度厂长也在年会上说过类似的话：“前方，我们的征途真的是星辰大海！”
            
                <h3>摄影</h3>仍然会抽空或兼职拍片，谁叫喜欢呢，更多动态还请关注
                <a href="http://photoartlife.lofter.com" target="_blank">LOFTER</a>、
                <a href="https://m.mepai.me/photographyer/u_592e418fe4a53.html" target="_blank">米拍</a>、
                <a href="https://photoartlife.tuchong.com" target="_blank">图虫摄影</a>、
                <a href="https://500px.me/PhotoArtLife" target="_blank">500PX</a>等摄影社区。
                <h3>设计与写作</h3>
                <a href="http://kquanr.com" target="_blank">博客</a>
                和
                <a href="http://t.cn/Rt1xb42" target="_blank">公号文章及设计作品</a>
                ，也会抽空更新，愿不忘初衷。
                <h3>自媒体与传媒电影</h3><a href="//i.youku.com/mukuashi" target="_blank">优酷自媒体</a>与<a href="//www.jianshu.com/u/0daeb4835d2d" target="_blank">三方平台专栏</a>等，缓缓归矣。`
      }
    ];
    const tabsChildren = childrenData.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            过去，今天，明天
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            四年像过了十年，从中原到北方，再从北方回到南方，再也不怕归零。
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}

export default Content;
