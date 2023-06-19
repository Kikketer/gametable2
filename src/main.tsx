import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CommonWindow } from './CommonWindow'
import { NoDice } from './routes/NoDice'

const router = createBrowserRouter([
  {
    element: <CommonWindow />,
    errorElement: <NoDice />,
    children: [
      {
        path: '/controller',
        lazy: () => import('./routes/Controller'),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
