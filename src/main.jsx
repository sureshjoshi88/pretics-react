import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import themeProvider from './hooks/usetheame.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <themeProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </themeProvider>
  </BrowserRouter>
)
