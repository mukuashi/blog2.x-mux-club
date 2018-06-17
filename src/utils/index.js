/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 常用工具函数，参考 https://github.com/zhangkun-Jser/autils
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-23 12:25:27
 * @version 0.1 | 2017-01-23 // Initial version.
 * @version 0.2 | 2017-02-08 // delete not important toTop function.
 * @version 0.2 | 2018-05-01 // add isMobile judge.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-06-18 02:47:50
*/
/**
 * @desc 获取滚动条距顶部的距离
 * @returns  number
 * @date     2018-03-17
 * @author   mukuashi | mukuashi@qq.com
*/
export function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
/**
 * @desc 设置滚动条距顶部的距离
 * @returns  number
 * @date     2018-03-17
 * @author   mukuashi | mukuashi@qq.com
*/
export function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}
//
const getRelation = (str1, str2) => {
  if (str1 === str2) {
    console.warn('Two path are equal!');  // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
};
//
const getRenderArr = (routes) => {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    let isAdd = false;
    // 是否包含
    isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
};
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(routePath =>
    routePath.indexOf(path) === 0 && routePath !== path);
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map((item) => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}
/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}
/**
 * @desc 在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
 * @date     2018-01-10
 * @author   mukuashi |mukuashi@qq.com
*/
const requestAnimFrame = ((() => window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  ((callback) => {
    window.setTimeout(callback, 1000 / 60);
  })))();

export function scrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return;
  }
  const diff = to - getScrollTop();
  if (diff === 0) return;
  const step = (diff / duration) * 10;
  requestAnimFrame(
    () => {
      if (Math.abs(step) > Math.abs(diff)) {
        setScrollTop(getScrollTop() + diff);
        return;
      }
      setScrollTop(getScrollTop() + step);
      if ((diff > 0 && getScrollTop() >= to) || (diff < 0 && getScrollTop() <= to)) {
        return;
      }
      scrollTo(to, duration - 16);
    });
}
/**
 * @desc 开发环境判断，暂时分为dev和prod
 * @return {Boolean} true/false | 是否为生产环境production
 * @date     2017-04-11
 * @author   mukuashi | mukuashi@qq.com
 */
export function isProd() {
  const match = 'kquanr.com';
  if (window && window.location && window.location.hostname) {
    return window.location.hostname.includes(match);
  } else {
    return false;
  }
};
/**
 * @desc 设备环境判断，暂时分为移动和PC
 * @return {Boolean} true/false
 * @date     2018-05-01
 * @author   mukuashi | mukuashi@qq.com
 */
export function isMobile() {
  return navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)
}