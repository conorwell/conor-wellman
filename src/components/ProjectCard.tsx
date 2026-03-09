import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

type ProjectCardProps = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card>
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
