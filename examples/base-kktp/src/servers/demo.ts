import { request } from '@uiw-admin/utils'

function selectById(params: { id: string }) {
  return request('/api/demo/selectById', {
    method: 'POST',
    body: { ...params },
  })
}

export { selectById }
