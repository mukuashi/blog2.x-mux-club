/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 系统公共Model层
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-23 12:25:27
 * @version 0.1 | 2018-03-23  // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-07 02:32:13
*/
export default {
  namespace: 'global',
  // 初始化state
  state: {
    ismobile: false,
  },
  // 增删改查显隐切换等纯函数
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },
  // 异步，同步写法，Generator函数，后期async/awit代替
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  // 初始化或监听data
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
};
