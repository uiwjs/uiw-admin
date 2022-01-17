import request from '../utils/request';


// /api/demo/selectPage
export function selectDemoPage(params: any) {
  return request('/api/demo/selectPage', {
    method: 'POST',
    body: { ...params },
  });
}

// /api/demo/insert
export function insert(params: any) {
  return request('/api/demo/insert', {
    method: 'POST',
    body: { ...params },
  });
}

// /api/demo/edit
export function update(params: any) {
  return request('/api/demo/update', {
    method: 'POST',
    body: { ...params },
  });
}

// /api/demo/selectById
export function selectById(params: { id: string }) {
  return request('/api/demo/selectById', {
    method: 'POST',
    body: { ...params },
  });
}