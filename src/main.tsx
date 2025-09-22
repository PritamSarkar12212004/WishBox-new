import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './main/App'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './utils/context/ContextProvider'

createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
)
