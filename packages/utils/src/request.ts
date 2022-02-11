import axios, { AxiosRequestConfig } from 'axios';
// import history from '../routes/history';
import { splitUrl } from './utils';
import qs from 'qs';
// Get the current location.
// const location = history.location;
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

export interface Options extends AxiosRequestConfig {
  /** swr_Rest_Time 用于重新触发事件使用 */
  body?: any & { swr_Rest_Time?: number | string };
  /** 数据格式  **/
  requestType?: 'form' | 'json' | 'urlencoded';
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url: string, options: Options = {}) {
  const method = options.method || 'GET';
  const { body, headers, requestType = 'json', ...rest } = options;
  // 删除swr_Rest_Time
  body?.swr_Rest_Time && delete body.swr_Rest_Time;
  const newOptions: Options = {
    ...rest,
    url,
    method,
    data: { ...body },
  };

  if (requestType === 'json') {
    newOptions.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      ...(headers || {}),
    };
    newOptions.data = JSON.stringify(body);
  } else if (requestType === 'form') {
    const newFormData = new FormData();
    Object.entries(body || {}).forEach(([key, value]: [string, any]) => {
      newFormData.append(key, value);
    });
    newOptions.headers = {
      Accept: 'application/json',
      ...(headers || {}),
    };
    newOptions.data = newFormData;
  } else if (requestType === 'urlencoded') {
    newOptions.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Accept: 'application/json',
      ...(headers || {}),
    };
    newOptions.data = qs.stringify(body, { arrayFormat: 'repeat' });
  }

  if (/(GET)/.test(method)) {
    newOptions.url = splitUrl(url, { ...body });
    delete newOptions.body;
  }

  // 加载 token
  let token = sessionStorage.getItem('token') || localStorage.getItem('token');

  if (token) {
    newOptions.headers = {
      ...(newOptions.headers || {}),
      token,
    };
  }

  return axios
    .request(newOptions)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      const response = err.response;
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const status = response.status;
      const errortext = (codeMessage as any)[status] || response.statusText;
      // Notification.error({
      //   message: '错误提示：',
      //   description: (response.data && response.data.info) || '没有错误提示',
      // });
      const error = new Error(errortext);
      error.name = response.status;
      // error.response = response;
      if (response.data) {
        return response.data;
      }
      throw error;
    });
}
