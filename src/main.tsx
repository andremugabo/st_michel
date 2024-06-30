import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store'
import './index.css'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
} else {
  console.error('Root element not found')
}
