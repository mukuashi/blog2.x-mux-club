/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-23 12:25:27
 * @version 0.1 | 2016-03-23  // Initial version.
 * @version 0.2 | 2017-12-15  // add many banner images.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-30 19:45:42
*/
// some assets imgs or others
import headerNav from '../assets/images/header-nav.png';
import headerAvatar from '../assets/images/header-avatar.png'
import bannerLogo from '../assets/images/banner-logo.png';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';
import contactPublic from '../assets/images/contact-public.jpg';
import contactPrivate from '../assets/images/contact-private.jpg';
import footerNav from '../assets/images/footer-nav.png';

const nowYear = new Date().getFullYear();
//
export const data = {
  prefix: 'mux',
  version: '2.x/',
  title: 'mukuashi@PhotoArtLife | 2.x Blog',
  header: {
    logo: headerNav,
    nav: [
      {
        id: 0,
        name: '首页',
        isReact: false,
        path: '/',
        target: null,
      },
      {
        id: 1,
        name: '项目篇（1.x版)',
        isReact: false,
        path: '/project',
        url: '//kquanr.com/project',
        target: '_blank',
      },
      {
        id: 2,
        name: '背景篇',
        isReact: false,
        path: '/about',
        url: '//kquanr.com/about',
        target: '_blank',
      },
      {
        id: 3,
        name: '摄影篇',
        isReact: false,
        url: 'http://photoartlife.lofter.com',
        target: '_blank',
      },
      {
        id: 4,
        name: '专栏篇',
        isReact: false,
        path: '/about/works',
        url: '//kquanr.com/about/works',
        target: '_blank',
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
        name: '回到旧版1.x',
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
      content: '一个信仰和平与自由的摄影师、制片人、自媒体/公路作者...',
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
          link: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
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
      content: '一个喜欢创作与挑战的程序猿/软件工程师、独立设计师...',
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
        icon: 'article',
        title: '写作',
        content: '从念大学开始并坚持和喜欢至今的莫过于拍照写文章记便签这些事了，后来开始在网上博客、公众号、简书/LOFTER等连载，也算是喂养心兽。',
      },
      {
        id: 5,
        icon: 'media',
        title: '媒体',
        content: '在做广告和自媒体那会，接触一些广告制作和传媒文化团队，现在媒体可能更多扮演着内容加工和制作甚至多次创作形式的传播介质。',
      },
      {
        id: 6,
        icon: 'camera',
        title: '摄/电影',
        content: '记得是14年开始玩摄影，慢慢寻找和探索，作为一个爱好者，获奖、做主持人、电影或纪录片拍摄、负责摄影活动及参与比赛、私拍或商演拍摄...慢慢开始了独立摄影之路。',
      },
    ],
  },
  content2: {
    text: {
      title: '一个创作者的富媒体之路',
      subtitle: '成长即乐趣吧。不乎于去做电影、写代码、写文章、玩摄影等等这些事情，可能是一个阶段接着一个阶段去实现一个接着一个计划，得失的过程，便知岁月。',
    },
    video: {
      cover: '//kquanr.com/files/blog/2.x/video/View_Dream/View_From_A_Blue_Moon_Trailer-HD.jpg',
      url: '//kquanr.com/files/blog/2.x/video/View_Dream/View_From_A_Blue_Moon_Trailer-HD.mp4',
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
        body: `<h3>设计</h3>UI & UX，边念书边在某广告公司做广告传媒与平面设计等工作。
        <h3>编程</h3>学校的一些基本课程学习和校外兼职项目，同时做着在线讲师项目创业和外包服务等。
        <h3>媒体</h3>网上连载<a href="//kquanr.com/about/works" target="_blank">博客</a>文章和<a href="//i.youku.com/mukuashi" target="_blank">视频</a>前后期制作等。
        <h3>活动</h3>参加一些活动及比赛，华为杯、ACM、摄影比赛、微电影比赛等。`,
      },
      {
        tab: {
          tag: '2015-2016（Junior）',
          icon: 'three',
        },
        img: 'https://cdn.dribbble.com/users/99875/screenshots/1458439/pharrell_drib.gif',
        body: `<h3>编程</h3>在<a href="https://www.baidu.com" target="_blank">百度</a>的一个产品<a href="https://www.zuoyebang.com" target="_blank">作业帮</a>搜索平台组，全职研发实习FE@前端坑。<h3>设计</h3>会继续做些小东西，偏注用户体验和交互细节更多的产品。<h3>摄影</h3>反正是有空就拍呗，城市（自然）风光和人文纪实为主，人像、肖像也挺感喜欢，总之是在创作路上<a href="//photoartlife.lofter.com" target="_blank"> LOFTER</a>、<a href="https://m.mepai.me/photographyer/u_592e418fe4a53.html" target="_blank">米拍</a>、<a href="https://500px.me/PhotoArtLife" target="_blank">500PX</a>、<a href="https://photoartlife.tuchong.com" target="_blank">图虫</a>等。
        <h3>写作</h3>慢慢开始放到<a href="http://t.cn/Rt1xb42" target="_blank">微信公众号</a>、<a href="https://www.jianshu.com/u/0daeb4835d2d" target="_blank">简书</a>等一些自媒体平台连载。`,
      },
      {
        tab: {
          tag: '2016-2017（Senior）',
          icon: 'four',
        },
        img: 'https://cdn.dribbble.com/users/6084/screenshots/2448824/icns.gif',
        body: `<h3>编程</h3>先后在<a href="//www.mi.com" target="_blank">小米 </a><a href="//www.miui.com" target="_blank">MIUI</a>安全组、短视频组从事全职研发工作@前端工程师。<h3>产品</h3>UGC App<a href="//wg.miui.com" target="_blank">围观小视频</a>、PGC App<a href="//xk.miui.com" target="_blank">想看视频</a>、PGC作者平台<a href="//open.xk.miui.com" target="_blank">想看开放平台</a>、UGC审核后台<a href="//mp.wg.miui.com" target="_blank">围观CRM</a>、PGC审核后台<a href="//mp.xk.miui.com" target="_blank">想看CRM</a>等。
        <h3>摄影</h3>从小透明开始慢慢在国内社区冒泡，作为<a href="https://m.mepai.me/photographyer/u_592e418fe4a53.html" target="_blank">米拍认证自由摄影师，#上海#、#城市#、#旅行#主持人</a>，米拍优秀主持人，米拍城市-巡城记北京十佳摄影师，<a href="//photoartlife.lofter.com" target="_blank">LOFTER摄影达人，LOFTER旅行家，LOFTER自由摄影师</a>等，一路走过来收获的不仅仅是感动，还有相知相惜。
        <h3>设计</h3>作为一个自由独立设计师，喜欢设计和创造的这种兴趣也相辅相成了我的研发工作和摄影输入输出，一来可以做出自己喜欢的style，二来做电影后期也派上了用场。<a href="//i.youku.com/mukuashi" target="_blank">优酷自媒体</a>、<a href="//kquanr.com/project/demo/mukuashi" target="_blank">2017·济南大学毕设答辩@mukuashi</a>等。
        <h3>写作</h3>还是一如既往地坚持记录吧，部分会放到网上<a href="http://t.cn/Rt1xb42" target="_blank">专栏</a>连载。`,
      },
      {
        tab: {
          tag: '2018-至今（Future）',
          icon: 'cafe',
        },
        img: 'https://cdn.dribbble.com/users/2007910/screenshots/4625590/___.gif',
        body: `<h3>工作</h3>目前还是大部分时间的研发坑，小部分时间的摄影与创作空间。有一点印象很深刻，记得在小米工作时，电脑每天的开机画面都是一张很好看的风光壁纸，幻灯片淡入一个很大的标题：永远相信美好的事情即将发生！当然，雷总很多发布会或年会都会说这句话，也一直影响着作者，去做感动人心的产品！
        <h3>摄影</h3>还是当初那个摄影爱好者，还在坚持纪录和拍东西，更多作品移步关注
        <a href="http://photoartlife.lofter.com" target="_blank">LOFTER</a>、
        <a href="https://m.mepai.me/photographyer/u_592e418fe4a53.html" target="_blank">米拍</a>、
        <a href="https://photoartlife.tuchong.com" target="_blank">图虫摄影</a>、
        <a href="https://500px.me/PhotoArtLife" target="_blank">500PX</a>等社区。
        <h3>设计与写作</h3>
        <a href="http://kquanr.com" target="_blank">博客</a>和<a href="http://t.cn/Rt1xb42" target="_blank">公号文章及设计作品</a>，也会抽空更新，愿不忘初心。
        <h3>媒体与电影</h3><a href="//i.youku.com/mukuashi" target="_blank">优酷自媒体</a>与<a href="//www.jianshu.com/u/0daeb4835d2d" target="_blank">三方平台专栏</a>等，博主偶尔上线。`,
      },
    ],
  },
  content4: {
    text: {
      title: 'Photography And Creation Plus',
      subtitle: '摄影、电影、文字、代码... 作为作者现在主要的创作介质，相辅相成，收获感动和快乐，也希望可以传递和分享更多的视角和能量。博客仅展示部分作品，更多连载于 ',
      media: [
        {
          id: 1,
          name: 'LOFTER',
          after: '、',
          url: 'http://photoartlife.lofter.com',
        },
        {
          id: 2,
          name: '米拍',
          after: '、',
          url: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
        },
        {
          id: 3,
          name: '500PX',
          after: '、',
          url: 'https://500px.me/PhotoArtLife',
        },
        {
          id: 4,
          name: '图虫摄影',
          after: '...',
          url: 'https://photoartlife.tuchong.com',
        },
      ],
    },
    block: [
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-1.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-1.jpg",
        tags: [{ value: "2016", title: "2016" }, { value: "风光", title: "风光" }, { value: "旅行", title: "旅行" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "旅拍风光，拍摄于济南、北京、张家口等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-2.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-2.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }, { value: "旅行", title: "旅行" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "人文纪实，拍摄于爵士音乐节、上海等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-3.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-3.jpg",
        tags: [{ value: "2017", title: "2017" }, { value: "风光", title: "风光" }, { value: "自然", title: "自然" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "旅拍风光，拍摄于黄山、上海等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-4.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-4.jpg",
        tags: [{ value: "2016", title: "2016" }, { value: "城市", title: "城市" }, { value: "人文", title: "人文" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "旅拍风光，拍摄于济南、北京等",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-5.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-5.jpg",
        tags: [{ value: "城市", title: "城市" }, { value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "城市人文纪实，拍摄于上海等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-6.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-6.jpg",
        tags: [{ value: "建筑", title: "建筑" }, { value: "城市", title: "城市" }, { value: "人文", title: "人文" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "城市建筑，拍摄于北京、上海等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-7.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-7.jpg",
        tags: [{ value: "旅行", title: "旅行" }, { value: "风光", title: "风光" }, { value: "人文", title: "人文" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "旅拍风光、人文纪实，拍摄于北京、秦皇岛等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-8.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-8.jpg",
        tags: [{ value: "2016", title: "2016" }, { value: "风光", title: "风光" }, { value: "旅行", title: "旅行" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "旅拍风光，拍摄于济南、北京、张家口等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-9.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-9.jpg",
        tags: [{ value: "风光", title: "风光" }, { value: "旅行", title: "旅行" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "风光旅行，拍摄于杭州、北京等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-10.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-10.jpg",
        tags: [{ value: "城市", title: "城市" }, { value: "人文", title: "人文" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "城市风光，拍摄于杭州等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-11.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-11.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        caption: "人文纪实，拍摄于北京、上海等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-12.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-12.jpg",
        tags: [{ value: "人像", title: "人像" }],
        thumbnailWidth: 300,
        thumbnailHeight: 600,
        caption: "人文旅拍，拍摄于浙江等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s1.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s1.jpg",
        tags: [{ value: "旅行", title: "旅行" }, { value: "风光", title: "风光" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: '风光旅行，拍摄于钱塘江等。',
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s2.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s2.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "人文纪实，拍摄于上海当代艺术馆等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s3.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s3.jpg",
        tags: [{ value: "城市", title: "城市" }, { value: "风光", title: "风光" }, { value: "旅行", title: "旅行" }, { value: "2018", title: "2018" }],
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        caption: "城市风光，拍摄于上海外滩等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s4.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s4.jpg",
        tags: [{ value: "风光", title: "风光" }, { value: "自然", title: "自然" }],
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        caption: "自然风光，拍摄于河北等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s5.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s5.jpg",
        tags: [{ value: "城市", title: "城市" }, { value: "风光", title: "风光" }],
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        caption: "城市风光，拍摄于北京天坛公园等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s6.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s6.jpg",
        tags: [{ value: "风光", title: "风光" }, { value: "自然", title: "自然" }],
        thumbnailWidth: 160,
        thumbnailHeight: 90,
        caption: "自然风光，拍摄于黄山等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s7.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s7.jpg",
        tags: [{ value: "风光", title: "风光" }, { value: "自然", title: "自然" }, { value: "2017", title: "2017" }],
        thumbnailWidth: 160,
        thumbnailHeight: 90,
        caption: "自然风光，拍摄于北京、河北、新疆等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s8.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s8.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "旅行", title: "旅行" }],
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        caption: "旅拍风光，拍摄于北戴河、北京等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2017-s9.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2017-s9.jpg",
        tags: [{ value: "风光", title: "风光" }, { value: "自然", title: "自然" }, { value: "2016", title: "2016" }],
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        caption: "自然风光，拍摄于河北、北京等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-1.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-1.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-2.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-2.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-3.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-3.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-4.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-4.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-5.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-5.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-s1.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-s1.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
      {
        src: "//kquanr.com/files/blog/2.x/images/IMG2018-s2.jpg",
        thumbnail: "//kquanr.com/files/blog/2.x/images/IMG2018-s2.jpg",
        tags: [{ value: "人文", title: "人文" }, { value: "纪实", title: "纪实" }],
        thumbnailWidth: 400,
        thumbnailHeight: 600,
        caption: "自然风光，拍摄于上海南京路等。",
      },
    ],
  },
  footer: {
    logo: {
      img: footerNav,
      content: '一只拍片码稿、画图写代码的创作者',
    },
    block: [
      {
        id: '1',
        title: '关于作者',
        content: [
          {
            id: '1',
            name: '自由/签约摄影师 | 摄影达人',
            path: '//photoartlife.lofter.com',
          },
          {
            id: '2',
            name: 'LOFTER认证旅行家/摄影师',
            path: '//photoartlife.lofter.com',
          },
          {
            id: '3.1',
            name: '米拍认证·自由摄影师',
            path: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
          },
          {
            id: '3.2',
            name: '米拍城市、旅行等主持人',
            path: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
          },
          {
            id: '4',
            name: '500PX摄影师',
            path: 'https://500px.me/PhotoArtLife',
          },
          {
            id: '5',
            name: '图虫摄影师',
            path: 'https://photoartlife.tuchong.com',
          },
          {
            id: '6',
            name: '程序猿/软件工程师',
            path: 'https://github.com/photoArtLife',
          },
          {
            id: '7',
            name: '视频后期及制片人',
            path: '//i.youku.com/mukuashi',
          },
          {
            id: '8',
            name: '自媒体/公路作者',
            path: '//kquanr.com/about/works',
          },
          {
            id: '9',
            name: '独立设计师',
            path: '//kquanr.com/about',
          },
          {
            id: '10',
            name: '关于更多...',
            path: '//kquanr.com/about',
          },
        ],
      },
      {
        id: '2',
        title: '博客驿站',
        content: [
          {
            id: '1',
            name: '背景篇',
            path: '//kquanr.com/about',
          },
          {
            id: '2',
            name: '项目篇(1.x版)',
            path: '//kquanr.com/project',
          },
          {
            id: '3',
            name: '摄影/文Plus篇',
            path: '//kquanr.com/about/works',
          },
          {
            id: '4',
            name: 'LOFTER摄影',
            path: '//photoartlife.lofter.com',
          },
          {
            id: '5',
            name: '米拍摄影',
            path: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
          },
          {
            id: '6',
            name: '500PX摄影',
            path: 'https://500px.me/PhotoArtLife',
          },
          {
            id: '7',
            name: '图虫摄影',
            path: 'https://photoartlife.tuchong.com',
          },
          {
            id: '8',
            name: '微信自媒体',
            path: 'http://t.cn/Rt1xb42',
          },
          {
            id: '9',
            name: 'instagram(少更)',
            path: 'https://www.instagram.com/mukuashi',
          },
          {
            id: '10',
            name: 'Github(少更)',
            path: 'https://github.com/photoArtLife',
          },
        ],
      },
      {
        id: '3',
        title: '资源Club',
        content: [
          {
            id: '1',
            name: 'Stack Overflow',
            path: 'https://stackoverflow.com',
          },
          {
            id: '2',
            name: 'Ant Design Pro',
            path: 'https://pro.ant.design',
          },
          {
            id: '3',
            name: '蚂蚁金服设计平台',
            path: 'https://design.alipay.com',
          },
          {
            id: '4',
            name: '淘宝前端团队（FED）',
            path: 'http://taobaofed.org',
          },
          {
            id: '5',
            name: '阿里巴巴国际UED团队',
            path: 'http://www.aliued.com',
          },
          {
            id: '6',
            name: '腾讯ISUX社交用户设计部',
            path: '//isux.tencent.com',
          },
          {
            id: '7',
            name: '百度FEX前端研发部',
            path: 'https://fex.baidu.com',
          },
          {
            id: '8',
            name: '京东凸凹实验室',
            path: 'https://aotu.io',
          },
          {
            id: '9',
            name: 'Iconfont-阿里矢量图标库',
            path: 'http://www.iconfont.cn',
          },
          {
            id: '10',
            name: '更多导航...',
            path: 'http://lackk.com/bookmark',
          },
        ],
      },
      {
        id: '4',
        title: '社交媒体',
        content: [
          {
            id: '1',
            icon: 'sina-weibo-circle',
            name: '新浪微博',
            path: 'https://weibo.com/mukuashi',
          },
          {
            id: '2',
            icon: 'wechat-circle',
            name: '微信专栏',
            path: 'http://t.cn/Rt1xb42',
          },
          {
            id: '3',
            icon: 'camera-circle',
            name: 'LOFTER摄影',
            path: '//photoartlife.lofter.com',
          },
          {
            id: '4',
            icon: 'mi-camera',
            name: '米拍摄影',
            path: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
          },
          {
            id: '5',
            icon: '500px-circle',
            name: '500PX摄影',
            path: 'https://500px.me/PhotoArtLife',
          },
          {
            id: '6',
            icon: 'tuchong',
            name: '图虫摄影',
            path: 'https://photoartlife.tuchong.com',
          },
          {
            id: '7',
            icon: 'video',
            name: '优酷自媒体',
            path: '//i.youku.com/mukuashi',
          },
          {
            id: '8',
            icon: 'github',
            name: 'Github',
            path: 'https://github.com/PhotoArtLife',
          },
          {
            id: '9',
            icon: 'email-circle',
            name: '邮箱📮',
            path: '//kquanr.com/about/works#four',
          },
          {
            id: '10',
            icon: 'home-circle',
            name: '返回1.x版',
            path: '//kquanr.com',
          },

        ],
      },
    ],
    copyright: {
      number: '备案号：鲁ICP备15022927号 ',
      reserved: `Copyright © 2015-${nowYear} mukuashi Inc. All Rights Reserved. `,
    },
    info: {
      version: '版本2.x ',
    },
  },
};
