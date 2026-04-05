import { Card, CardActionArea, CardContent, Typography, Stack, Chip } from '@mui/material'

type ProjectCardProps = {
  title: string
  description: string
  link: string
  tech?: string[]
}

export default function ProjectCard({ title, description, link, tech }: ProjectCardProps) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: tech?.length ? 1.5 : 0 }}>
            {description}
          </Typography>
          {tech?.length && (
            <Stack direction="row" spacing={0.75} flexWrap="wrap">
              {tech.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{ fontSize: '0.7rem', height: 20, bgcolor: 'action.hover' }}
                />
              ))}
            </Stack>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
