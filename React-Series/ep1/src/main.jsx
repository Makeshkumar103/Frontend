import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Hello,App } from './App.jsx'
import {App as Anton,  Hello as Welcome } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hello/> */}
    <Anton />
    <Welcome />
  </StrictMode>,
)
