import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './Context/MenuContext.jsx'
import { FormProfileProvider } from './Context/FormProfileContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormProfileProvider>
    <MenuProvider>
    <App />
    </MenuProvider>
    </FormProfileProvider>
  </StrictMode>,
)
