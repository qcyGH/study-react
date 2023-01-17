import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Context } from './hooks/OrderContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Header />
        <App />
      </Context>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
