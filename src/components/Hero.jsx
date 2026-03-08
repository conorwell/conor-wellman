import { Avatar, Typography, Stack, IconButton } from '@mui/material'
import me from '../assets/me.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Hero() {
  return (
    <Stack spacing={3} alignItems="center">
      <Avatar src={me} sx={{ width: 180, height: 180 }} />

      <Typography variant="h4">Conor Wellman</Typography>

      <Typography variant="body1" textAlign="center">
        Software engineer and mathematician from Colorado College. Currently working at
        bet365 building AI Integrations, Observability Platforms, and Distributed Systems
        Applications Previously worked at NIST and Connamara Technologies.
      </Typography>

      <Stack direction="row" spacing={1}>
        <IconButton href="https://github.com/conorwell">
          <GitHubIcon />
        </IconButton>

        <IconButton href="https://www.linkedin.com/in/conor-wellman-a70a93115/">
          <LinkedInIcon />
        </IconButton>

        <IconButton href="https://www.instagram.com/conorwell/?hl=en">
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
