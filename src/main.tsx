import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CommonWindow } from './CommonWindow'
import { NoDice } from './routes/NoDice'
import { Component as Controller } from './routes/Controller'

const router = createBrowserRouter([
  {
    element: <CommonWindow />,
    errorElement: <NoDice />,
    children: [
      {
        path: '/controller',
        element: <Controller />,
        // lazy: () => import('./routes/Controller'),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <div className="container p-2 mx-auto my-3 border-2 rounded-md">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
