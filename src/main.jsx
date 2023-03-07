import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import { TransactionProvider } from './Hooks/TransactionContext'
import GlobalStyle from './styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <TransactionProvider>
      <Home />
    </TransactionProvider>
  </React.StrictMode>
)
