import { Box, Toolbar } from '@mui/material'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'

export default function Home({ onToggleTheme, isDark }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <Toolbar />

      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left — static */}
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            flexShrink: 0,
            display: 'flex',
            alignItems: 'flex-start',
            p: { xs: 4, md: 6 },
          }}
        >
          <Hero />
        </Box>

        {/* Right — scrollable */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 4, md: 6 },
            borderLeft: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Experience />
        </Box>
      </Box>
    </Box>
  )
}
