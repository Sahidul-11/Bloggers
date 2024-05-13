import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import Provider from './Provider/Provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
