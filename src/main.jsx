import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Admin from './Admin.jsx'
import User from './User.jsx'

const isAdmin = window.location.pathname.startsWith('/admin')


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdmin ? <Admin /> : <User />}
  </StrictMode>
)


