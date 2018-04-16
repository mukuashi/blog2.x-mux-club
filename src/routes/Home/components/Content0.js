import React , { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img width="100%" src="http://kquanr.com/images/PhotoArtLife.png" />
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            一只拍片码稿、画图写代码的文盲患（作）者
          </p>
          <Button type="ghost" key="button" id={`${props.id}-button`}>
            下滑 Get More
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=70', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
