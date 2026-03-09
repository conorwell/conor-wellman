import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './theme/theme'
import Home from './pages/Home'
import MouseGlow from './components/MouseGlow'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <MouseGlow />
      <Home onToggleTheme={() => setIsDark((d) => !d)} isDark={isDark} />
    </ThemeProvider>
  )
}
