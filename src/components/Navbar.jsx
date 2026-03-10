import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuIcon from '@mui/icons-material/Menu'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Math', href: '#other' },
  { label: 'Other', href: '#other' },
]

export default function Navbar({ onToggleTheme, isDark }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AppBar position="fixed" color="primary" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={onToggleTheme}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 200, pt: 2 }}>
                {NAV_LINKS.map(({ label, href }) => (
                  <ListItem key={label} disablePadding>
                    <ListItemButton component="a" href={href} onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {NAV_LINKS.map(({ label, href }) => (
              <Button key={label} color="inherit" href={href}>
                {label}
              </Button>
            ))}
            <IconButton color="inherit" onClick={onToggleTheme} sx={{ ml: 1 }}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
