import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'




// Ye main folder hai jha se sabko data ka beta milta hai.Browser Router ka use ye hai ki page ko reload nahi karta ,Store Context Provider ka use ye hai ki ye sabko value pass karta hai jo assets me hai.


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
   <App />
  </StoreContextProvider>
</BrowserRouter>
)
