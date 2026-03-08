import { Card, CardContent, Typography } from '@mui/material'

type ProjectCardProps = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">{link}</Typography>
      </CardContent>
    </Card>
  )
}
