import React from 'react'
import { render } from 'react-dom'
import { App } from './container/App/App'
import { ThemeProvider } from 'styled-components'
import '@contentful/forma-36-react-components/dist/styles.css'

render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
