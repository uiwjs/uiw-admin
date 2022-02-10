import React from 'react'
import { Button } from 'uiw'
import { useNavigate } from 'react-router-dom'
import { useSWRConfig } from 'swr'
import { request } from '@uiw-admin/utils'

const Dashboard = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState('')
  const { cache } = useSWRConfig()

  console.log('cache', cache.get('login'))

  React.useEffect(() => {
    request('/api', {
      method: 'POST',
      requestType: 'urlencoded',
      body: {
        a: 1,
      },
    })
  }, [])

  return (
    <div>
      Dashboard
      <input value={state} onChange={(event) => setState(event.target.value)} />
      <hr />
      <Button onClick={() => navigate('/', { replace: true })}>Logout</Button>
    </div>
  )
}
export default Dashboard
