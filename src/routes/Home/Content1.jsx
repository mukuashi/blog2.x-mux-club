import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon } from 'antd';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      {
        icon: 'design',
        title: '设计',
        content: '从UI View层过渡到Code Products，博客托管相关原型交互设计资源等。'
      },
      {
        icon: 'code',
        title: '前后端',
        content: 'Web项目基本由前后端框架构建，博客搭建FED手册及开源技术。' },
      {
        icon: 'crm',
        title: '中后台',
        content: '系统CRM与管理后台、中间层、图像识别与3D建模、通信技术等。'
      },
      {
        icon: 'camera',
        title: '摄影',
        content: '眼睛的一种凝固方式。'
      },
      {
        icon: 'article',
        title: '写作',
        content: '虽不及文学高斗，但足矣慰藉心兽。'
      },
      {
        icon: 'media',
        title: '媒体',
        content: '广告与传媒、电影与文化创作，穷极一生，但为恭求盈之。'
      }
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <i className={"micon micon-" + item.icon}></i>
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
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
      </div>
    );
  }
}


export default Content;
