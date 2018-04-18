/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-23 12:25:27
 * @version 0.1 | 2018-03-23  // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-19 03:57:45
*/
const nowYear = new Date().getFullYear();
//
export const data = {
  header: {
    logo: 'http://kquanr.com/images/header_nav.png',
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
  },
  banner: [
    {
      id: 1,
      title: '<img width="100%" src="http://kquanr.com/images/PhotoArtLife.png" />',
      bgImg: 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
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
      title: '<img width="100%" src="http://kquanr.com/images/PhotoArtLife.png" />',
      bgImg: 'https://zos.alipayobjects.com/rmsportal/xHxWkcvaIcuAdQl.jpg',
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
          link: 'https://m.mepai.me/photographyer/u_592e418fe4a53.html',
        },
      ],
    },
    {
      id: 3,
      title: '<img width="100%" src="http://kquanr.com/images/PhotoArtLife.png" />',
      bgImg: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
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
};
