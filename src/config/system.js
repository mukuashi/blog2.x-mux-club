/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-23 12:25:27
 * @version 0.1 | 2016-03-23  // Initial version.
 * @version 0.2 | 2017-12-15  // add many banner images.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-17 00:50:04
*/
// some assets imgs or others
import headerNav from '../assets/images/header-nav.png';
import bannerLogo from '../assets/images/banner-logo.png';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';
import contactPublic from '../assets/images/contact-public.jpg';
import contactPrivate from '../assets/images/contact-private.jpg';
import headerAvatar from '../assets/images/header-avatar.png'

const nowYear = new Date().getFullYear();
//
export const data = {
  prefix: 'PhotoArtLife',
  header: {
    logo: headerNav,
    nav: [
      {
        id: 0,
        name: '首页',
        path: '/',
      },
      {
        id: 1,
        name: '项目篇(2016年及之前)',
        path: '/arts',
      },
      {
        id: 2,
        name: '背景篇',
        path: '/project',
      },
      {
        id: 3,
        name: '摄影篇',
        path: 'http://photoartlife.lofter.com',
      },
      {
        id: 4,
        name: '笔记篇',
        path: '/project/works/',
      },
    ],
    contact: {
      block: [
        {
          id: 'a1',
          alt: '微信公众号',
          img: contactPublic,
        },
        {
          id: 'a2',
          alt: 'my wechat',
          img: contactPrivate,
        },
      ],
    },
    user: {
      name: 'mukuashi',
      img: headerAvatar,
    },
    submenu: [
      {
        id: 'a',
        name: '当前版本：2.x',
        href: '',
        target: '_blank',
      },
      {
        id: 'b',
        name: '微信专栏',
        href: 'http://t.cn/Rt1xb42',
        target: '_blank',
      },
      {
        id: 'c',
        name: '回到旧版',
        href: '/',
        target: '_self',
      },
    ],
  },
  banner: [
    {
      id: 1,
      headerImg: bannerLogo,
      bgImg: banner1,
      content: '一只拍片码稿、画图写代码的创作者',
      button: [
        {
          id: 'a1',
          value: '下滑 Get More',
          icon: '',
          link: null,
          target: null,
          event: true,
        },
      ],
    },
    {
      id: 2,
      headerImg: bannerLogo,
      bgImg: banner2,
      content: '一个信仰自由与平等的摄影师、制片人、自媒体/公路作者...',
      button: [
        {
          id: 'a2',
          value: 'LOFTER',
          icon: 'camera',
          target: '_blank',
          animate: { x: '+=20' },
          link: 'http://photoartlife.lofter.com',
        },
        {
          id: 'b2',
          value: '米拍',
          icon: 'man',
          target: '_blank',
          animate: { x: '+=20', blur: '3px' },
          link: 'https://www.mepai.me/user/u_592e418fe4a53',
        },
        {
          id: 'b3',
          value: '500PX',
          icon: 'html5',
          target: '_blank',
          animate: { x: '+=20' },
          link: 'https://500px.me/PhotoArtLife',
        },
      ],
    },
    {
      id: 3,
      headerImg: bannerLogo,
      bgImg: banner3,
      content: '一个喜欢创作与挑战的程序猿、软件工程师、背包客...',
      button: [
        {
          id: 'a3',
          value: 'Github',
          icon: 'github',
          target: '_blank',
          animate: { x: '+=20' },
          link: 'https://github.com/PhotoArtLife',
        },
      ],
    },
  ],
  content1: {
    text: {
      title: '阿里云提供基础的环境即服务',
      subtitle: '博客基于React、Redux、Dvajs、Node.js等技术栈构建',
    },
    block: [
      {
        id: 1,
        icon: 'design',
        title: '设计',
        content: '从大学一二年纪的广告杂志设计过渡到后来的互联产品设计及研发，现在可能会偏爱简约主义、工业设计这一块。',
      },
      {
        id: 2,
        icon: 'code',
        title: '前后端',
        content: 'Web的发展以及各种热门框架的铺天盖地，但基础这东西终究万变不离其宗，前后端分离和高效研发、维护尤为重要。',
      },
      {
        id: 3,
        icon: 'crm',
        title: '中后台',
        content: '对于大多ToB或ToC的互联产品，中后台业务场景已经再普遍不过，业界的各种解决方案也丰富了各种数据展示的能力。',
      },
      {
        id: 4,
        icon: 'camera',
        title: '摄/电影',
        content: '记得是14年开始玩摄影，慢慢寻找和探索，作为一个爱好者，获奖、做主持人、电影或纪录片拍摄、负责摄影活动及参与比赛、私拍或商演拍摄...慢慢开始了独立摄影之路。',
      },
      {
        id: 5,
        icon: 'article',
        title: '写作',
        content: '从念大学开始并坚持和喜欢至今的莫过于拍照写文章记便签这些事了，后来开始在网上博客、公众号、简书/LOFTER等连载，也算是喂养心兽。',
      },
      {
        id: 6,
        icon: 'media',
        title: '媒体',
        content: '在做广告和自媒体那会，接触一些广告制作和传媒文化团队，现在媒体可能更多扮演着内容加工和制作甚至多次创作形式的传播介质。',
      },
    ],
  },
  content2: {
    text: {
      title: '一个创作者的富媒体之路',
      subtitle: '成长即乐趣吧。不乎于去做电影、写代码、写文章、玩摄影等等这些事情，可能是一个阶段接着一个阶段去实现一个接着一个计划，得失的过程，便知岁月。',
    },
    video: {
      cover: '//kquanr.com/files/blog/View_From_A_Blue_Moon_Trailer-HD.jpg',
      url: '//kquanr.com/files/blog/View_From_A_Blue_Moon_Trailer-HD.mp4',
    },
  },
  content3: {
    text: {
      title: '过去，现在，未来',
      subtitle: '人生或该是完整的、不重复的生长。不一定去很多的国家，到很多的地方，长多少见识和词汇，跨过那么大、那么无穷的一个世界才叫跨世。也许就是每天排得满满的，创作和工作，一直负责搞笑和搞事情吧。',
    },
    block: [
      {
        tab: {
          tag: '2013-2014（Freshman）',
          icon: 'one',
        },
        img: 'https://cdn.dribbble.com/users/285475/screenshots/1792557/werewolf-big7.gif',
        body: `<h3>摄影</h3>兴趣导向的入门吧，开始泡图书馆和蹭一些美术或摄影课。
                <h3>设计</h3>可能还是视觉上的吸引阶段，倒腾些PS/AI，关注一些UED Blog、广告制作等传媒行业。
                <h3>编程</h3>这个绝对是科班出身了，信息学院计算机系，可能那时候写代码还只是从书本上一行一行抄过来打出来看看demo的阶段。
                <h3>写作</h3>还没有今天自媒体这么流行火热，只是个写作爱好者 <a href="http://kquanr.com/article" target="_blank">老版旧文</a>`,
      },
      {
        tab: {
          tag: '2014-2015（Sophomore）',
          icon: 'two',
        },
        img: 'https://cdn.dribbble.com/users/285475/screenshots/3618358/skate_apple_dribbble.gif',
        body: `<h3>设计</h3>UI & UX，在某广告公司做广告传媒与平面设计等工作。
        <h3>编程</h3>学校的一些基本课程学习和校外兼职项目，同时做着在线讲师项目创业和外包服务等。
        <h3>媒体</h3>网上连载<a href="//kquanr.com/project/works" target="_blank">博客</a>文章和<a href="//i.youku.com/mukuashi" target="_blank">视频</a>前后期制作等。
        <h3>活动</h3>参加一些活动及比赛，华为杯、ACM、摄影比赛、微电影比赛等。`,
      },
      {
        tab: {
          tag: '2015-2016（Junior）',
          icon: 'three',
        },
        img: 'https://cdn.dribbble.com/users/99875/screenshots/1458439/pharrell_drib.gif',
        body: `<h3>编程</h3>在<a href="https://www.baidu.com" target="_blank">百度</a>的一个产品<a href="https://www.zuoyebang.com" target="_blank">作业帮</a>搜索平台组，研发实习FE@前端坑。<h3>设计</h3>会继续做些小东西，偏注用户体验和交互细节更多的产品。<h3>摄影</h3>反正是有空就拍呗，城市（自然）风光和人文纪实为主，人像、肖像也挺感喜欢，总之是在创作路上<a href="//photoartlife.lofter.com" target="_blank"> LOFTER</a>、<a href="https://www.mepai.me/user/u_592e418fe4a53" target="_blank">米拍</a>、<a href="https://500px.me/PhotoArtLife" target="_blank">500PX</a>、<a href="https://photoartlife.tuchong.com" target="_blank">图虫</a>等。
        <h3>写作</h3>慢慢开始放到<a href="http://t.cn/Rt1xb42" target="_blank">微信公众号</a>、<a href="https://www.jianshu.com/u/0daeb4835d2d" target="_blank">简书</a>等一些自媒体平台连载。`,
      },
      {
        tab: {
          tag: '2016-2017（Senior）',
          icon: 'four',
        },
        img: 'https://cdn.dribbble.com/users/6084/screenshots/2448824/icns.gif',
        body: `<h3>编程</h3>先后在<a href="//www.mi.com" target="_blank">小米 </a><a href="//www.miui.com" target="_blank">MIUI</a>安全组、短视频组从事全职研发工作@前端工程师。<h3>产品</h3>UGC App<a href="//wg.miui.com" target="_blank">围观小视频</a>、PGC App<a href="//xk.miui.com" target="_blank">想看视频</a>、PGC作者平台<a href="//open.xk.miui.com" target="_blank">想看开放平台</a>、UGC审核后台<a href="//mp.wg.miui.com" target="_blank">围观CRM</a>、PGC审核后台<a href="//mp.xk.miui.com" target="_blank">想看CRM</a>等。
        <h3>摄影</h3>从小透明开始慢慢在国内社区冒泡，作为<a href="https://www.mepai.me/user/u_592e418fe4a53" target="_blank">米拍认证自由摄影师，#上海#、#城市#、#旅行#主持人</a>，米拍优秀主持人，米拍城市-巡城记北京十佳摄影师，<a href="//photoartlife.lofter.com" target="_blank">LOFTER摄影达人，LOFTER旅行家，LOFTER自由摄影师</a>等，一路走过来收获的不仅仅是感动，还有相知相惜。
        <h3>设计</h3>作为一个半吊子设计师，喜欢设计和创造的这种兴趣也相辅相成了我的研发工作和摄影输入输出，一来可以做出自己喜欢的style，二来做电影后期也派上了用场。<a href="//i.youku.com/mukuashi" target="_blank">优酷自媒体</a>、<a href="//kquanr.com/mukuashi" target="_blank">2017·济南大学毕设答辩@mukuashi</a>等。
        <h3>写作</h3>还是一如既往地坚持记录吧，部分会放到网上<a href="http://t.cn/Rt1xb42" target="_blank">专栏</a>连载。`,
      },
      {
        tab: {
          tag: '2018-至今（Future）',
          icon: 'cafe',
        },
        img: 'https://cdn.dribbble.com/users/605899/screenshots/2181211/400x300.gif',
        body: `<h3>工作</h3>目前还是大部分时间的研发坑，小部分时间的摄影与创作空间。有一点印象很深刻，记得在小米工作时，电脑每天的开机画面都是一张很好看的风光壁纸，飘过一个很大的标题：永远相信美好的事情即将发生！当然，雷总每年年会都会强调，也一直影响着作者，去做感动人心的产品！
        <h3>摄影</h3>机子还没转手，还在拍，如有需要还请先约，更多作品移步关注
        <a href="http://photoartlife.lofter.com" target="_blank">LOFTER</a>、
        <a href="https://www.mepai.me/user/u_592e418fe4a53" target="_blank">米拍</a>、
        <a href="https://photoartlife.tuchong.com" target="_blank">图虫摄影</a>、
        <a href="https://500px.me/PhotoArtLife" target="_blank">500PX</a>等社区。
        <h3>设计与写作</h3>
        <a href="http://kquanr.com" target="_blank">博客</a>和<a href="http://t.cn/Rt1xb42" target="_blank">公号文章及设计作品</a>，也会抽空更新，愿不忘初心。
        <h3>媒体与电影</h3><a href="//i.youku.com/mukuashi" target="_blank">优酷自媒体</a>与<a href="//www.jianshu.com/u/0daeb4835d2d" target="_blank">三方平台专栏</a>等，博主偶尔上线。`,
      },
    ],
  },

};
