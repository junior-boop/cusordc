import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from '../navigation/navigation'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Index />
    </Router>
  </React.StrictMode>,
)
