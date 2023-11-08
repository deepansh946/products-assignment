import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import { makeServer } from './server'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const queryClient = new QueryClient()

makeServer()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
