import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import { getTheme, setTheme } from '@/themes/theme'
import App from './App'
import './index.css'
import './themes/palettes.css'

setTheme(getTheme())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
