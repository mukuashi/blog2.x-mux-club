/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 图标库JS方案，为区别Ant Design的<Icon />组件，rename为Iconfont，支持自定图标
 * @usage 使用如<Iconfont type="" /> type为icon的类型，可在开发者选用的icon库里选择对应的name
 * @Author: mukuashi | mukuashi@qq.com
 * @Date:   2017-02-02 12:25:27
 * @version 0.1 | 2017-04-02 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-05 11:43:19
*/
import React from 'react';
// omit.js 对象浅拷贝
import omit from 'omit.js';
import classNames from 'classnames';

export default (props) => {
  const { type, className = '', size, title = null } = props;
  const classString = classNames({
    micon: true,
    [`micon-${type}`]: true,
    [`micon-${size}`]: size && true,
  }, className);
  return <i {...omit(props, ['type', 'size'])} className={classString} title={title} />;
};
