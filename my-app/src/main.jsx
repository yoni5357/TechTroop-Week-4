import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ex1 from './Ex1.jsx'
import Ex2 from './Ex2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ex1 />
    <Ex2 />
  </StrictMode>,
)
