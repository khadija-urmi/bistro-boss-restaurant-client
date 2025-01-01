import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <div className='max-w-screen-xl mx-auto'>
          <RoutesComponent />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
