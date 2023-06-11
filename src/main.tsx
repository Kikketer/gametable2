import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CommonWindow } from './CommonWindow.tsx'
import { NoDice } from './routes/NoDice.tsx'
import { Component as Controller } from './routes/Controller.tsx'

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container p-2 mx-auto my-3 border-2 rounded-md">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
