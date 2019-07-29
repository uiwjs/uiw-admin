import request from '../utils/request';

/**
 * 提交登录
 * @param {Object} params
 */
export function login(params) {
  return request('/api/login', {
    method: 'POST',
    body: { ...params },
  });
}

/**
 * 验证是否登录
 */
export function verify() {
  return request('/api/user/verify');
}
