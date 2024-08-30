import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'
import { NextUIProvider } from '@nextui-org/react'
import store from '@/store/'
import './styles/main.scss'
import './styles/theme.scss'
import './styles/webkit.scss'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  </StrictMode>,
)
