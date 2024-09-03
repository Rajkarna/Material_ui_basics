import React from 'react'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Box, Stack } from '@mui/material'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const App = () => {
  const [mode, setMode] = useState('light')

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack  direction={'row'} justifyContent={'space-between'} spacing={2}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>

        <Add />

      </Box>
    </ThemeProvider>
  )
}

export default App