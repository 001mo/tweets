import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import ThemeContext, { reducer, initTheme } from 'contexts/theme'
import { useReducer } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, dispatch] = useReducer(reducer, initTheme);

  return (
      <ThemeContext.Provider value={{ state: theme, dispatch }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
  )
}

export default MyApp
