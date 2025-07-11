import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import { AuthContext } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserContext>
            <AuthContext>
                <App></App>
            </AuthContext>
        </UserContext>
    </BrowserRouter>
)
