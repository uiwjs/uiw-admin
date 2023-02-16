import React from 'react'
import ReactClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './rematch'

import './index.css'
import Route from './routes'

ReactClient.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Route />
  </Provider>
)
