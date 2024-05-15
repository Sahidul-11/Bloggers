import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import Provider from './Provider/Provider'
import "./index.css"
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
