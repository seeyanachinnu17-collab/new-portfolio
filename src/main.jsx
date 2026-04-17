import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/new-portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
)
return 
(
  <div style={{ backgroundColor: "red", color: "black", height: "100vh" }}>
    <h1>home page</h1>
    <p>{userdata.name}</p>
    <p>{userdata.address}</p>
    <p>{userdata.language}</p>
  </div>
)