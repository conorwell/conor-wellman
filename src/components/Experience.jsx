import { Box, Typography, Stack, Chip, ButtonBase } from '@mui/material'
import experiences from '../data/experiences'

export default function Experience() {
  return (
    <section id="experience">
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>

      <Stack spacing={0} sx={{ mt: 2 }}>
        {experiences.map((exp, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5 }}>
              <Box
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  flexShrink: 0,
                }}
              />
              {i < experiences.length - 1 && (
                <Box sx={{ width: 2, flex: 1, bgcolor: 'divider', my: 0.75 }} />
              )}
            </Box>

            <ButtonBase
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'block',
                textAlign: 'left',
                borderRadius: 2,
                pb: 4,
                px: 1.5,
                width: '100%',
                transition: 'background-color 0.4s ease',
                '&:hover': {
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light',
                },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" sx={{ mb: 0.25 }}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {exp.company}
                </Typography>
                <Chip
                  label={exp.period}
                  size="small"
                  sx={{ fontSize: '0.7rem', height: 20, bgcolor: 'action.hover' }}
                />
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {exp.role}
              </Typography>

              <Stack component="ul" spacing={0.5} sx={{ pl: 2, m: 0 }}>
                {exp.highlights.map((h, j) => (
                  <Typography key={j} component="li" variant="body2" color="text.secondary">
                    {h}
                  </Typography>
                ))}
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 1.5 }}>
                {exp.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ fontSize: '0.7rem' }}
                  />
                ))}
              </Stack>
            </ButtonBase>
          </Box>
        ))}
      </Stack>
    </section>
  )
}
