import { request } from '@uiw-admin/utils';

// /api/demo/selectById
function selectById(params: { id: string }) {
  return request('/api/demo/selectById', {
    method: 'POST',
    body: { ...params },
  });
}

const update = '/api/demo/update'

const insert = '/api/demo/insert'

const selectPage = '/api/demo/selectPage'

export{
  selectById,
  update,
  insert,
  selectPage
}