import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lightTheme, darkTheme } from './theme/theme'
import Home from './pages/Home'
import Climbing from './pages/Climbing'
import MouseGlow from './components/MouseGlow'
import Navbar from './components/Navbar'

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const toggleTheme = () => setIsDark((d) => !d)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <MouseGlow />
        <Navbar onToggleTheme={toggleTheme} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home onToggleTheme={toggleTheme} isDark={isDark} />} />
          <Route path="/climbing" element={<Climbing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
