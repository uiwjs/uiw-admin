import { request } from '@uiw-admin/utils'

export interface Login {
  username: string;
  password: string;
}

/**
 * 提交登录
 * @param {Object} params
 */
export function login (params: Login) {
  return request('/api/login', {
    method: 'POST',
    body: { ...params }
  })
}

/**
 * 刷新权限
 * @param {Object} params
 */
export function reloadAuth () {
  return request('/api/reloadAuth', {
    method: 'POST'
  })
}
