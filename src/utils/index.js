/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 常用工具函数，个别参考 https://github.com/zhangkun-Jser/autils
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-23 12:25:27
 * @version 0.1 | 2017-01-23 // Initial version.
 * @version 0.2 | 2017-02-08 // delete not important toTop function.
 * @version 0.3 | 2018-05-01 // add isMobile judge and token get.
 * @version 0.4 | 2018-05-11 // add deepCopy.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-06 19:18:05
*/
/**
 * @date     2018-03-17
 * @desc 获取滚动条距顶部的距离
 * @returns  number
 * @author   mukuashi | mukuashi@qq.com
*/
export function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
/**
 * @date     2018-03-17
 * @desc 设置滚动条距顶部的距离
 * @returns  number
 * @author   mukuashi | mukuashi@qq.com
*/
export function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}
/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}
/**
 * @date     2018-01-10
 * @desc 在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
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
 * @date     2017-04-11
 * @desc 开发环境判断，暂时分为dev和prod
 * @return {Boolean} true/false | 是否为生产环境production
 * @author   mukuashi | mukuashi@qq.com
 */
export function isProd() {
  const match = 'kquanr.com';
  if (window && window.location && window.location.hostname) {
    return window.location.hostname.includes(match);
  }
  return false;
};
/**
 * @date     2018-05-01
 * @desc 设备环境判断，暂时分为移动和PC
 * @return {Boolean} true/false
 * @author   mukuashi | mukuashi@qq.com
 */
export function isMobile() {
  return navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)
}
/**
 * @date     2018-05-01
 * @desc 根据cookie生成唯一token指示符
 * @return {String}
 * @author   mukuashi | mukuashi@qq.com
 */
export function getToken() {
  const name = '___rl__test__cookies';
  const parts = `; ${document.cookie}`.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null
};
/**
 * @date 2018-05-11
 * @desc deeply copy object or arrays with nested attributes
 * @param  {any} obj
 * @return {any} a depply copied replica of arguement passed
 * @author   mukuashi | mukuashi@qq.com
 */
export function deepClone(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  let newObj = {};
  if (Array.isArray(obj)) {
    newObj = obj.map(item => deepClone(item));
  } else {
    Object.keys(obj).forEach((key) => {
      newObj[key] = deepClone(obj[key]);
      return newObj[key];
    })
  }
  return newObj;
};