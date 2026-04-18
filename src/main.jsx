import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { build } from 'vite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/new-portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
)
function App() {
  return (
    <div style={{
      backgroundColor: "red",
      color: "black",
      minHeight: "100vh",
      width: "100vw"
    }}>
      <h1>Home page</h1>
    </div>
  )
}