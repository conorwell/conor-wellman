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
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Experience', to: '/#experience' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Climbing', to: '/climbing' },
]

export default function Navbar({ onToggleTheme, isDark }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <AppBar position="fixed" color="primary" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontWeight: 700, fontSize: '1rem', textTransform: 'none' }}
          >
            Conor Wellman
          </Button>
        </Box>

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
                {NAV_LINKS.map(({ label, to }) => (
                  <ListItem key={label} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={to}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {NAV_LINKS.map(({ label, to }) => (
              <Button
                key={label}
                color="inherit"
                component={Link}
                to={to}
                sx={{
                  fontWeight: pathname === to ? 700 : 400,
                  borderBottom: pathname === to ? '2px solid' : '2px solid transparent',
                  borderRadius: 0,
                  pb: '2px',
                }}
              >
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
