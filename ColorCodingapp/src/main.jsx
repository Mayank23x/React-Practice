import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import ColorCoding from './Components/ColorCoding.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
