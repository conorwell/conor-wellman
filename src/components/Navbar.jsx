import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export default function Navbar({ onToggleTheme, isDark }) {
  return (
    <AppBar position="fixed" color="primary" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        <Button color="inherit" href="#projects">
          Projects
        </Button>
        <Button color="inherit" href="#experience">
          Experience
        </Button>
        <Button color="inherit" href="#other">
          Math
        </Button>
        <Button color="inherit" href="#other">
          Other
        </Button>

        <IconButton color="inherit" onClick={onToggleTheme} sx={{ ml: 1 }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
