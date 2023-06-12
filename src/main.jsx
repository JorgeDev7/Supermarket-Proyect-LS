import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ListadoProvider } from './context/listadoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoProvider>
      <App />
    </ListadoProvider>
  </React.StrictMode>
)
