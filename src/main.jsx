import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Card from './Card.jsx';
import App from './containers/App.jsx'
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
