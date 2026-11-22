import { Typography, Stack, IconButton, Box, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import DownloadIcon from '@mui/icons-material/Download'
import Typewriter from './Typewriter'
import resume from '../assets/resume.pdf'

const SPECIALTIES = [
  'Production AI Agents',
  'Full-Stack & Infrastructure Engineering',
  'Distributed Systems',
]

export default function Hero() {
  return (
    <Stack spacing={3} alignItems="left">
      <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Conor Wellman
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Full-Stack & Infrastructure Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Colorado College 2025 · 4.00 GPA · Summa Cum Laude · Phi Beta Kappa
        </Typography>
        <Typography variant="caption" color="text.secondary">
          B.A. Computer Science & Mathematics
        </Typography>
      </Box>

      <Typewriter strings={SPECIALTIES} />

      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
        I&apos;m a software engineer with a background in mathematics, drawn to problems
        that require deep thinking and reward intellectual collaboration. I studied
        Computer Science and Mathematics at Colorado College. These days I work at bet365,
        building production AI agents for on-call incident response, automated
        remediation, and eval suites on top of distributed trading infrastructure.
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
        Based in Denver, open to relocation and remote.
      </Typography>

      <Stack direction="row" spacing={1}>
        <IconButton color="primary" href="https://github.com/conorwell">
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/conor-wellman-a70a93115/"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" href="mailto:conwellman@gmail.com">
          <EmailIcon />
        </IconButton>
      </Stack>

      <Button
        variant="outlined"
        size="small"
        startIcon={<DownloadIcon />}
        href={resume}
        download="Conor Wellman Resume.pdf"
        sx={{ alignSelf: 'flex-start' }}
      >
        Resume
      </Button>
    </Stack>
  )
}
