/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-23 12:25:27
 * @version 0.1 | 2016-03-23  // Initial version.
 * @version 0.2 | 2017-12-15  // add many banner images.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-05-01 04:34:23
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
      content: '一只拍片码稿、画图写代码的文盲（作）者',
      button: [
        {
          id: 'a1',
          value: '下滑 Get More',
          icon: '',
          link: null,
          target: null,
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
          animate: { x: '+=20', blur: '3px', rotate: 360 },
          link: 'https://www.mepai.me/user/u_592e418fe4a53',
        },
        {
          id: 'b3',
          value: '500PX',
          icon: 'html5',
          target: '_blank',
          animate: { scale: 0, x: '+=20' },
          link: 'https://www.mepai.me/user/u_592e418fe4a53',
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
    block: [
      {
        id: 1,
        icon: 'design',
        title: '设计',
        content: '从UI View层过渡到Code Products，博客托管相关原型交互设计资源等。',
      },
      {
        id: 2,
        icon: 'code',
        title: '前后端',
        content: 'Web项目基本由前后端框架构建，博客搭建FED手册及开源技术。',
      },
      {
        id: 3,
        icon: 'crm',
        title: '中后台',
        content: '系统CRM与管理后台、中间层、图像识别与3D建模、通信技术等。',
      },
      {
        id: 4,
        icon: 'camera',
        title: '摄影',
        content: '眼睛的一种凝固方式。',
      },
      {
        id: 5,
        icon: 'article',
        title: '写作',
        content: '虽不及文学高斗，但足矣慰藉心兽。',
      },
      {
        id: 6,
        icon: 'media',
        title: '媒体',
        content: '广告与传媒、电影与文化创作，穷极一生，但为恭求盈之。',
      },
    ],
  },

};
