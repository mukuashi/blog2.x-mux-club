/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-23 12:25:27
 * @version 0.1 | 2016-03-23  // Initial version.
 * @version 0.2 | 2017-12-15  // add many banner images.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-15 19:53:08
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

};
