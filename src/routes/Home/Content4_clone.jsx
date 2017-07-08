import React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
//弹窗画廊插件
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

const styles = {
  
}

class Content extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        
    }
  }

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

 

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span onClick={(e) => this.setState({ visible: true })}>
          <img src={item.img} height="100%" />
        </span>
        <p>{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
      {
        img: 'http://imglf.nosdn.127.net/img/eCsxeXUwR1dBeGVXa0N0QytwTG92MHpEb3VRTzBIQk1va2hldklYajV3L1liM2taQUZyYWZnPT0.jpg?imageView&thumbnail=3000y1928&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgUGhvdG9BcnRMaWZlIC8gcGhvdG9hcnRsaWZlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0',
        content: 'LOFTER@PhotoArtLife1'
      },
      {
        img: 'http://imglf2.nosdn.127.net/img/eCsxeXUwR1dBeGYzSVRrUHk1bWhBNTlGaWJsRkt1d0kwMmpjbUhOanpTLzVDb1pycXFGVlZRPT0.jpg?imageView&thumbnail=2000y1091&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgUGhvdG9BcnRMaWZlIC8gcGhvdG9hcnRsaWZlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0',
        content: 'LOFTER@PhotoArtLife2'
      },
      {
        img: 'http://imglf0.nosdn.127.net/img/eCsxeXUwR1dBeGZJZFdQTC9OaDdpU21EWEszMzc2MGlUdWlnQU5HVDh6dHlpVm5ETVNBUFhRPT0.jpg?imageView&thumbnail=3000y1981&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgUGhvdG9BcnRMaWZlIC8gcGhvdG9hcnRsaWZlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0',
        content: 'LOFTER@PhotoArtLife3'
      },
      {
        img: 'http://imglf1.nosdn.127.net/img/eCsxeXUwR1dBeGRrcWE2Ym45OTFabldSS2psTmJCN2pYdW5SUnBzMkNPSlRJTGo1Sk1sOWtnPT0.jpg?imageView&thumbnail=3000y2000&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgUGhvdG9BcnRMaWZlIC8gcGhvdG9hcnRsaWZlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0',
        content: 'LOFTER@PhotoArtLife4'
      },
      {
        img: 'http://imglf.nosdn.127.net/img/eCsxeXUwR1dBeGZGN2dFUXBwU2o0aHM2V3JuWEpXRmptQUEyalgvWGFLSzkxT3FXcUpsSjF3PT0.jpg?imageView&thumbnail=2999y2000&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgUGhvdG9BcnRMaWZlIC8gcGhvdG9hcnRsaWZlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0',
        content: 'LOFTER@PhotoArtLife5'
      },
      {
        img: 'http://imglf1.nosdn.127.net/img/eCsxeXUwR1dBeGREYjIwTVpjbjV3RVIweVo4RTNXS2ZvSkpqbjNvdTlDV1JiclJETE8vdUtRPT0.jpg?imageView&thumbnail=2999y2000&type=jpg&quality=96&stripmeta=0&type=jpg',
        content: 'LOFTER@PhotoArtLife6'
      },
      {
        img: 'http://imglf1.nosdn.127.net/img/eCsxeXUwR1dBeGRoREgvWnFxN3MzY3Jzc1RzSHpreWJjSnVzWkRtUVBDNDFwZDdtSkxsVjlRPT0.jpg?imageView&thumbnail=2999y2000&type=jpg&quality=96&stripmeta=0&type=jpg',
        content: 'LOFTER@PhotoArtLife7'
      },
      {
        img: 'http://imglf2.nosdn.127.net/img/eCsxeXUwR1dBeGU4Y1ZRWHByWmZOZ282OURvUW5QSmNTMHFPUEd2a0NCcXNib0UvL2htVVJnPT0.jpg?imageView&thumbnail=2995y2000&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgUGhvdG9BcnRMaWZlIC8gcGhvdG9hcnRsaWZlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0',
        content: 'LOFTER@PhotoArtLife8'
      }
    ];
   
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            文学与摄影Plus
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            列举部分在学/玩摄影路上的成长（作品多分发于
            <a href="http://photoartlife.lofter.com" target="_blank">LOFTER</a>、
            <a href="https://m.mepai.me/photographyer/u_592e418fe4a53.html" target="_blank">米拍</a>、
            <a href="https://photoartlife.tuchong.com" target="_blank">图虫摄影</a>、
            <a href="https://500px.me/PhotoArtLife" target="_blank">500PX</a>等）
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
        
      </div>

    );
  }
}


export default Content;
