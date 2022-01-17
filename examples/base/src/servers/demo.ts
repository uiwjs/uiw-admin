import { request } from '@uiw-admin/utils';

// /api/demo/selectById
export function selectById(params: { id: string }) {
  return request('/api/demo/selectById', {
    method: 'POST',
    body: { ...params },
  });
}