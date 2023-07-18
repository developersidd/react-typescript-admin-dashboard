import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { ColoroModeContext, useMode } from './theme'

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColoroModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className="content">

          </main>
        </div>
      </ThemeProvider>
    </ColoroModeContext.Provider>
  )
}

export default App
