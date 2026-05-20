import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './shared/shared.css'

// Vite expone `base` como import.meta.env.BASE_URL.
// Lo pasamos a BrowserRouter para que las rutas funcionen bajo el prefijo
// del repo en GitHub Pages (ej: /pepeland-server). En local sirve como '/'.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
