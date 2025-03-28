import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MatrixGame from './MatrixGame'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MatrixGame />
  </StrictMode>,
)
