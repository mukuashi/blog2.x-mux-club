import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Tooltip } from 'antd';

class Footer extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: '//kquanr.com/images/footer.png', content: '一只拍片写稿、画图敲代码的文青患者' };
    const dataSource = [
      {
        title: '关于作者',
        content: '公路作者\n自由摄影师\n软件工程师\n半个设计师\n视频后期控\n环球游侠客\n待续 >>>',
        contentLink: '//kquanr.com/project/works\n//photoartlife.lofter.com\nhttps://github.com/photoArtLife\n//kquanr.com/project\n//i.youku.com/mukuashi\nhttps://500px.me/PhotoArtLife\njavascript:;'
      },
      {
        title: '博客驿站',
        content: 'FAQ\n联系我们',
        contentLink: '#\n#'
      },
      {
        title: '资源Club',
        content: 'Ant Design\nAnt Design Mobile\nAnt Cool\nAntD Library',
        contentLink: '#\n#\n#\n#'
      },
      {
        title: '社交媒体',
        content: 'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\nhttps://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\nhttps://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\nhttps://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg',
        contentLink: '#\n#\n#\n#'
      },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <p className="logo">
            <img src={logoContent.img} width="100%" />
          </p>
          <p>{logoContent.content}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          备案号：鲁ICP备15022927号 Copyright © 2015-Now All Rights Reserved<br/>
          <a href="javascript:;">版本2.x</a> Crafted By <a href="//photoartlife.lofter.com">PhotoArtLife</a> | Powered by <a href="//kquanr.com">mukuashi@Mich</a> Design For Life
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
