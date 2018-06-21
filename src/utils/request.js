import fetch from 'dva/fetch';
import { notification } from 'antd';
import { routerRedux } from 'dva/router';
import store from '../index';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...newOptions.headers,
      };
    }
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then((response) => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch((e) => {
      const { dispatch } = store;
      const status = e.name;
      if (status === 401) {
        dispatch(routerRedux.push('/'));
        return;
      }
      if (status === 403) {
        dispatch(routerRedux.push('/exception/403'));
        return;
      }
      if (status <= 504 && status >= 500) {
        dispatch(routerRedux.push('/exception/500'));
        return;
      }
      if (status >= 404 && status < 422) {
        dispatch(routerRedux.push('/exception/404'));
      }
    });
}
// 2.x request
// import axios from 'axios';
// import stringify from 'qs';

// const httpSvc = (options) => {
//   const {
//     method = 'get',
//     data,
//     placeholder,
//     useRaw = false,
//   } = options;

//   const url = getUrl(options.url, placeholder);

//   const cloneData = data;
//   switch (method.toLowerCase()) {
//     case 'get':
//       return axios.get(url, {
//         params: cloneData,
//       });
//     case 'delete':
//       return axios.delete(url, {
//         params: cloneData,
//       });
//     case 'post':
//       return axios.post(url, useRaw ? cloneData : stringify(cloneData), useRaw ? {
//         headers: { 'Content-type': 'application/json' },
//       } : {
//           headers: { 'Content-type': 'application/x-www-form-urlencoded' },
//         });
//     case 'put':
//       return axios.put(url, useRaw ? cloneData : stringify(cloneData), useRaw ? {
//         headers: { 'Content-type': 'application/json' },
//       } : {
//           headers: { 'Content-type': 'application/x-www-form-urlencoded' },
//         });
//     case 'patch':
//       return axios.patch(url, cloneData);
//     case 'file_upload':
//       return axios.post(url, cloneData, {
//         headers: { 'Content-type': 'multipart/form-data' },
//       });
//     default:
//       return axios(options);
//   }
// };

// function getUrl(url, placeholder) {
//   let result = url;
//   if (placeholder) {
//     for (const key in placeholder) {
//       if (Object.prototype.hasOwnProperty.call(placeholder, key)) {
//         result = result.replace(`:${key}`, placeholder[key]);
//       }
//     }
//   }
//   return result;
// }

// function CommonException({ response }) {
//   this.response = response;
// }

// CommonException.prototype = Object.create(Error.prototype);
// CommonException.prototype.constructor = CommonException;

// export default function request(options) {
//   return httpSvc(options).then((response) => {
//     const { statusText, status, data } = response;
//     if (!data.ret && data.errorCode === 401) {
//       throw new CommonException({
//         response,
//       });
//     }
//     return Promise.resolve({
//       success: true,
//       message: statusText,
//       statusCode: status,
//       ...data,
//     });
//   }).catch((error) => {
//     const { response } = error;
//     let msg;
//     let statusCode;
//     let errorCode;
//     if (response && response instanceof Object) {
//       const { data, statusText, status } = response;
//       statusCode = status;
//       msg = data.message || data.errorMsg || statusText;
//       errorCode = data.errorCode;
//     } else {
//       statusCode = 600;
//       msg = error.message || data.errorMsg || '网络错误';
//     }
//     return Promise.reject({ success: false, statusCode, message: msg, errorCode });
//   });
// }
