import { Box, Typography, Stack, Chip, Button } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import { featured } from '../data/projects'

export default function FeaturedProject() {
  return (
    <Box
      sx={{
        borderLeft: '3px solid',
        borderColor: 'primary.main',
        pl: 3,
        py: 1,
        mb: 5,
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
            <Typography variant="h5" fontWeight={700}>
              {featured.title}
            </Typography>
            <Chip
              label="Live"
              size="small"
              color="primary"
              sx={{ fontSize: '0.7rem', height: 20 }}
            />
          </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            {featured.tagline}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {featured.description}
          </Typography>

          <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ mb: 2.5 }}>
            {featured.tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{ fontSize: '0.7rem', height: 20, bgcolor: 'action.hover' }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="nowrap" alignItems="center">
            <Button
              variant="contained"
              size="small"
              endIcon={<LaunchIcon />}
              href={featured.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ whiteSpace: 'nowrap', px: 2 }}
            >
              boardlord.app
            </Button>
            {featured.repos
              .filter((r) => r.url)
              .map((repo) => (
                <Button
                  key={repo.label}
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ whiteSpace: 'nowrap', px: 2 }}
                >
                  {repo.label}
                </Button>
              ))}
          </Stack>
        </Box>

        {featured.screenshot ? (
          <Box
            component="img"
            src={featured.screenshot}
            alt={`${featured.title} screenshot`}
            sx={{
              width: { xs: '100%', md: 280 },
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              flexShrink: 0,
            }}
          />
        ) : (
          <Box
            sx={{
              width: { xs: '100%', md: 260 },
              height: 160,
              borderRadius: 2,
              border: '1px dashed',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography variant="caption" color="text.disabled">
              screenshot
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  )
}
