import React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Modal } from 'antd';
import Slider from 'react-slick';
//Carousel style
import '../../components/Slick/slick-theme.min.css'
import '../../components/Slick/slick.min.css'

const styles = {
  modalWidth: {
    width: '100%'
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        visible: false
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
        img: '//kquanr.com/files/blog/slickImgs/1.jpg',
        content: 'LOFTER@PhotoArtLife1'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/2.jpg',
        content: 'LOFTER@PhotoArtLife2'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/3.jpg',
        content: 'LOFTER@PhotoArtLife3'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/4.jpg',
        content: 'LOFTER@PhotoArtLife4'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/5.jpg',
        content: 'LOFTER@PhotoArtLife5'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/6.jpg',
        content: 'LOFTER@PhotoArtLife6'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/7.jpg',
        content: 'LOFTER@PhotoArtLife7'
      },
      {
        img: '//kquanr.com/files/blog/slickImgs/8.jpg',
        content: 'LOFTER@PhotoArtLife8'
      }
    ];
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      lazyLoad: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
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
        <Modal
          title = ""
          footer = {null}
          width = "50%"
          closable = {false}
          wrapClassName="vertical-center-modal"
          style={styles.modalWidth}
          visible={this.state.visible}
          onOk={(e) => this.setState({ visible: false })}
          onCancel={(e) => this.setState({ visible: false })}
        >
          <Slider {...settings}>
            {
              dataArray.map((item, index) => (
                <img src={item.img} key={index} alt="LOFTER@PhotoArtLife" width="100%" />
              ))
            }
          </Slider>
         
        </Modal>
      </div>

    );
  }
}


export default Content;
