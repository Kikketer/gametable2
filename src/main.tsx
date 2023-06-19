import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Image } from './components/Image'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Image path={'the-image.png'} />
  </React.StrictMode>
)
