/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 全局Index.js入口
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-06 13:27:06
*/
import '@babel/polyfill';
import { message } from 'antd';

export function config() {
  return {
    onError(err) {
      err.preventDefault();
      message.error(err.message);
    },
    initialState: {
      global: {
        text: 'hi mukuashi@PhotoArtLife！',
      },
    },
  };
}