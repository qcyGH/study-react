import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {Context} from './hoc/StoreProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Context>
        <Header />
        <App />
      </Context>
      <Footer />
  </React.StrictMode>
)
