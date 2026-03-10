import { Box, Toolbar } from '@mui/material'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'

export default function Home({ onToggleTheme, isDark }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <Toolbar />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flex: 1,
          overflow: { xs: 'visible', md: 'hidden' },
          height: { md: 'calc(100vh - 64px)' },
        }}
      >
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

        {/* Right — scrollable on desktop, natural flow on mobile */}
        <Box
          sx={{
            flex: 1,
            overflowY: { xs: 'visible', md: 'auto' },
            p: { xs: 4, md: 6 },
            borderLeft: { xs: 'none', md: '1px solid' },
            borderTop: { xs: '1px solid', md: 'none' },
            borderColor: 'divider',
          }}
        >
          <Experience />
        </Box>
      </Box>
    </Box>
  )
}
