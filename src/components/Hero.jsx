import { Typography, Stack, IconButton, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Typewriter from './Typewriter'

const SPECIALTIES = ['Distributed Systems', 'AI Integration', 'Observability']

export default function Hero() {
  return (
    <Stack spacing={3} alignItems="left">
      <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Conor Wellman
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Full Stack Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Colorado College · Summa Cum Laude
        </Typography>
        <Typography variant="caption" color="text.secondary">
          B.A. Computer Science & Mathematics
        </Typography>
      </Box>

      <Typewriter strings={SPECIALTIES} />

      <Stack direction="row" spacing={1}>
        <IconButton color="primary" href="https://github.com/conorwell">
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary" href="https://www.linkedin.com/in/conor-wellman-a70a93115/">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" href="https://www.instagram.com/conorwell/?hl=en">
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
