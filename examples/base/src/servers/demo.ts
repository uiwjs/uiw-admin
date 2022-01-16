import request from '../utils/request';


export function selectDemoPage(params: any) {
  return request('/api/selectDemoPage', {
    method: 'POST',
    body: { ...params },
  });
}