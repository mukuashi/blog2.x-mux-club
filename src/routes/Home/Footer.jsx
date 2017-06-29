import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Button, notification } from 'antd';

class Footer extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };
  //version notice
  
  openNotification = () => {
    const btnReturnClick = function() {
      window.location.href = 'http://kquanr.com'
    };
    const btnReturn = (
      <Button type="primary" size="default" onClick={btnReturnClick}>
        返回旧版
      </Button>
    );
    notification.open({
      message: 'Hey，欢迎访问 PhotoArtLife',
      description: '当前版本：2.x\n。\n为2016年及至今的博客新版本，老版本可以在首页切换（当前toast浮层会在3秒后自动关闭）。',
      icon: <i className="micon micon-2x micon-smile" style={{ color: '#108ee9' }}></i>,
      duration: 4,
      btn: btnReturn
    });
  }
  //map
  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item),
          hoverTitle = data.hoverTitle.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.split('MKSIcon@')[1];
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <i className={"micon micon-1x-bg micon-" + isImg } title={hoverTitle[ii]}></i> : cItem}
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
    const logoContent = {
      img: 'http://kquanr.com/images/footer.png',
      content: '一只拍片写稿、画图敲代码的文青患者'
    };
    const dataSource = [
      {
        title: '关于作者',
        content: '公路作者\n自由摄影师\n软件工程师\n半个设计师\n视频后期控\n环球游侠客\n待续 >>>',
        hoverTitle: '',
        contentLink: '//kquanr.com/project/works\n//photoartlife.lofter.com\nhttps://github.com/photoArtLife\n//kquanr.com/project\n//i.youku.com/mukuashi\nhttps://500px.me/PhotoArtLife\njavascript:;'
      },
      {
        title: '博客驿站',
        content: '背景篇\n摄影与文学篇\nLOFTER摄影\n图虫网摄影\n500PX摄影\n代码篇@2016及之前\n陆续公开中 >>>',
        hoverTitle: '',
        contentLink: '//kquanr.com/project\n//kquanr.com/project/works\n//photoartlife.lofter.com\nhttps://photoartlife.tuchong.com/\nhttps://500px.me/PhotoArtLife\n//kquanr.com/arts\njavascript:;'
      },
      {
        title: '资源Club',
        content: 'Stack Overflow\nAnt Design\n蚂蚁金服设计平台\n淘宝前端团队（FED）\n阿里巴巴国际UED团队\n腾讯ISUX社交用户设计部\n百度FEX前端研发部\nIconfont-阿里巴巴矢量图标库',
        hoverTitle: '',
        contentLink: 'https://stackoverflow.com\nhttps://ant.design\nhttps://design.alipay.com\n//taobaofed.org\n//www.aliued.com\n//isux.tencent.com\n//fex.baidu.com\n//www.iconfont.cn'
      },
      {
        title: '社交媒体',
        content: 'MKSIcon@sina-weibo-circle\nMKSIcon@wechat-circle\nMKSIcon@camera-circle\nMKSIcon@mi-camera\nMKSIcon@500px-circle\nMKSIcon@tuchong\nMKSIcon@video\nMKSIcon@github\nMKSIcon@email-circle\nMKSIcon@home-circle',
        hoverTitle: '新浪微博\n微信专栏\nLOFTER摄影\n米拍摄影专辑\n500px摄影专栏\n图虫摄影专栏\n优酷自媒体\nGithub代码中心\n联系邮箱\n返回旧版',
        contentLink: '//weibo.com/572512250\nhttp://t.cn/Rt1xb42\n//photoartlife.lofter.com\nhttps://m.mepai.me/photographyer/u_592e418fe4a53.html\nhttps://500px.me/PhotoArtLife\nhttps://photoartlife.tuchong.com\n//i.youku.com/mukuashi\nhttps://github.com/PhotoArtLife\n//kquanr.com/project/works#four\n//kquanr.com'
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
          备案号：鲁ICP备15022927号 <em>Copyright © 2015-Now All Rights Reserved</em>
          <p>
            <a href="javascript:;" onClick={this.openNotification}>版本2.x </a>
            Crafted By <a href="//photoartlife.lofter.com">PhotoArtLife </a>
            | Referenced By <a href="https://facebook.github.io/react" target="_blank">Facebook React </a>
            | Powered By <a href="//kquanr.com">mukuashi@Mich</a> Design For Life
          </p>
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
