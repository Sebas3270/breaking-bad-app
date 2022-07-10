import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from "./styles/Styles"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/breaking-bad-app'>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
