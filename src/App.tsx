import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { store } from './store'
import { router } from './routes'
import i18n from './i18n'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Provider>
  )
}

export default App
