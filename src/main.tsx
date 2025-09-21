import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './main/App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
