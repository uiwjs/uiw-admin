import React from 'react'
import { Button } from 'uiw'
import { useNavigate } from 'react-router-dom'
import { useSWRConfig } from 'swr'
import { RootState } from '@uiw-admin/models'

import { useSelector } from 'react-redux'

const Dashboard = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState('')
  const { cache } = useSWRConfig()
  const stores = useSelector((state: RootState) => state)
  console.log(stores)
  console.log('cache', cache.get('login'))

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
