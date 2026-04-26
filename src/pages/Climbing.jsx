import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Chip,
  Divider,
  Toolbar,
} from '@mui/material'
import { sends } from '../data/climbing'

function YouTubeEmbed({ videoId }) {
  return (
    <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={videoId}
      />
    </Box>
  )
}

export default function Climbing() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Toolbar />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 6 }}>
          <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 2, mb: 2 }}>
            <Typography variant="h4" fontWeight={700}>
              Climbing
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Outside of engineering, I&apos;m often focused on my climbing career. I&apos;ve competed in national finals for lead climbing and bouldering, earning an alternate spot on the US Team and an invitation to world championships. Outdoors, I have climbed routes up to V14 and 5.14, my proudest being &ldquo;The Multiverse&rdquo; (V14) and &ldquo;The Phoenix&rdquo; (V14). I am the first male from Illinois and first climber with T1D to ascend boulders of this difficulty.
            </Typography>
          </Box>
          <Divider />
        </Box>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          {sends.map((send) => (
            <Card
              key={send.title}
              elevation={0}
              sx={{
                flex: 1,
                minWidth: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minHeight: 52 }}>
                  <Chip
                    label={send.grade}
                    size="small"
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: '0.75rem' }}
                  />
                  <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.2 }}>
                    {send.title}
                  </Typography>
                </Box>
              </CardContent>

              <YouTubeEmbed videoId={send.youtubeId} />
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
