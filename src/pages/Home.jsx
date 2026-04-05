import { Box, Toolbar } from '@mui/material'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

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
          alignItems: 'flex-start',
        }}
      >
        {/* Left — sticky */}
        <Box
          sx={{
            width: { xs: '100%', md: '32%' },
            flexShrink: 0,
            position: { md: 'sticky' },
            top: { md: '64px' },
            height: { md: 'calc(100vh - 64px)' },
            display: 'flex',
            alignItems: 'flex-start',
            p: { xs: 4, md: 6 },
          }}
        >
          <Hero />
        </Box>

        {/* Right — natural scroll */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 6 },
            borderLeft: { xs: 'none', md: '1px solid' },
            borderTop: { xs: '1px solid', md: 'none' },
            borderColor: 'divider',
          }}
        >
          <Experience />
          <Projects />
        </Box>
      </Box>
    </Box>
  )
}
