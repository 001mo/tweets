import { useEffect, useReducer } from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider, useMediaQuery, CssBaseline } from '@mui/material'
import ThemeContext, { reducer, initTheme } from 'contexts/theme'
import { changeMode } from 'actions/theme';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, dispatch] = useReducer(reducer, initTheme);
  const userPrefMode = useMediaQuery('(prefers-color-scheme: dark)');

  const setUserPrefMode = () => { // (d) first check user saved preferences.
    if(userPrefMode) {
      dispatch(changeMode('dark'));
      return;
    }
    dispatch(changeMode('light'));
  }

  useEffect(() => {
    setUserPrefMode();
  }, [userPrefMode])

  return (
      <ThemeContext.Provider value={{ state: theme, dispatch }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
  )
}

export default MyApp
