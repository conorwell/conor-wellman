import { Card, CardContent, Typography, CardActionArea } from "@mui/material"

export default function ProjectCard({ title, description, link }) {

  return (
    <Card>

      <CardActionArea href={link} target="_blank">

        <CardContent>

          <Typography variant="h6">
            {title}
          </Typography>

          <Typography variant="body2">
            {description}
          </Typography>

        </CardContent>

      </CardActionArea>

    </Card>
  )
}