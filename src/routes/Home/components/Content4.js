import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Gallery from 'react-grid-gallery';
import { Slider, Rate, Tooltip, Avatar, Icon } from 'antd';
import { getToken } from 'utils';
import { data } from 'config/system';

const { text, block } = data.content4;
export default class Content extends PureComponent {

  static defaultProps = {
    className: 'content4',
  };
  state = {
    boxValue: 20,
    rateValue: localStorage.getItem(`${getToken()}-home-content4-rate`) ? localStorage.getItem(`${getToken()}-home-content4-rate`) : 3.5,
  };

  handleBoxChange = (value) => {
    this.setState({ boxValue: value });
  }
  handleRateChange = (value) => {
    this.setState({ rateValue: value }, () => {
      localStorage.setItem(`${getToken()}-home-content4-rate`, value)
    });
  }

  render() {
    const props = { ...this.props };
    const { boxValue, rateValue } = this.state;
    const { isMobile } = props;
    const marks = {
      0: '最小边距',
      20: '相册边距推荐值',
      50: {
        style: {
          color: '#f50',
        },
        label: <strong>最大边距</strong>,
      },
    };

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
              text.media.map(row => (
                <span key={row.id}>
                  <Link to={row.url} target="_blank">{row.name}</Link>{row.after}
                </span>
              ))
            }
          </TweenOne>
          <TweenOne
            key="c"
            animation={{ x: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className={`${props.className}-slider`}
            reverseDelay={300}
          >
            <Slider
              // vertical 垂直布局属性
              min={0}
              max={50}
              marks={marks}
              defaultValue={boxValue}
              onChange={this.handleBoxChange}
            />
          </TweenOne>
          <TweenOneGroup
            key="d"
            className={`${props.className}-img-wrapper`}
            enter={[
              { opacity: 0, duration: 0, type: 'from', delay: 400 },
              { ease: 'easeOutCubic', type: 'from', left: '0%' },
            ]}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
          >
            <Gallery
              margin={boxValue}
              rowHeight={isMobile ? 100 + boxValue : 200 + boxValue} // 图片当前列的默认高度
              images={block}
              showLightboxThumbnails         // 弹层后显示底部预览幻灯片缩略图
              backdropClosesModal            // 弹层后点击其他地方支持遮罩关闭
              enableImageSelection={false}   // 去掉多选checkbox
            />
          </TweenOneGroup>
          <TweenOne
            key="f"
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutCubic' }}
            reverseDelay={300}
            className={`${props.className}-rate`}
          >
            <Tooltip placement="top" title='给作者一个评价呗！'>
              <Avatar src="http://kquanr.com/images/header-avatar.png" />
            </Tooltip>
            <Rate
              allowHalf
              value={rateValue}
              style={{ color: 'rgb(246, 46, 25)' }}
              character={<Icon type="heart" />}
              onChange={this.handleRateChange}
            />
            {rateValue && <span className="ant-rate-text">评分：{rateValue} ⭐️📸</span>}
          </TweenOne>
        </OverPack>
      </section>
    );
  }
}
