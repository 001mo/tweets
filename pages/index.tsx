import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Typography, createTheme } from '@mui/material'
import { useContext, useState } from 'react'
import { ThemeContext } from 'contexts'
import { changeMode } from 'actions/theme'
import { useTheme } from '@mui/material'

const Home: NextPage = () => {
  const { dispatch } = useContext(ThemeContext);
  const theme = useTheme();
  const [xx, setXx] = useState(0);

  const handleClick = () => {
    // setXx(prev => prev + 1);
    dispatch(changeMode(theme.palette.mode === 'light' ? 'dark' : 'light'))
  }

  // console.log(theme)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h1">Test</Typography>

      <button onClick={handleClick}>change theme</button>
    </div>
  )
}

export default Home
