import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './contrast-legibility.css'
import { installAnalyticsBridge } from './lib/analytics.js'

installAnalyticsBridge()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
