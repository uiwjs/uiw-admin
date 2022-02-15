import React from 'react'
import { Button } from 'uiw'
import { useNavigate } from 'react-router-dom'
import { useSWRConfig } from 'swr'
import { Dispatch, RootState } from '@uiw-admin/models'
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
  const navigate = useNavigate()
  // const [state, setState] = React.useState('')

  const dispatch = useDispatch<Dispatch>()

  const { cache } = useSWRConfig()
  const stores = useSelector((state: RootState) => state)
  console.log(stores)
  console.log('cache', cache.get('login'))

  return (
    <div>
      Dashboard
      <input
        value={stores.docDs.test}
        onChange={(event) => {
          dispatch({
            type: 'docDs/updateState',
            payload: {
              test: event.target.value,
            },
          })
        }}
      />
      <hr />
      <Button onClick={() => navigate('/', { replace: true })}>Logout</Button>
    </div>
  )
}
export default Dashboard
