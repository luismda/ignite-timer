import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
