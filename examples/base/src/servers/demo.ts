import { request } from '@uiw-admin/utils';

// /api/demo/selectById
function selectById(params: { id: string }) {
  return request('/api/demo/selectById', {
    method: 'POST',
    body: { ...params },
  });
}
 function insert(params: any) {
  return request('/api/demo/insert', {
    method: 'POST',
    body: { ...params },
  });
}

// /api/demo/edit
function update(params: any) {
  return request('/api/demo/update', {
    method: 'POST',
    body: { ...params },
  });
}

const selectPage = '/api/demo/selectPage'

export{
  selectById,
  update,
  insert,
  selectPage
}