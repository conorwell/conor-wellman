import { Typography, Grid, Box } from '@mui/material'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import { cards } from '../data/projects'

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Projects
      </Typography>

      <FeaturedProject />

      <Grid container spacing={2}>
        {cards.map((p) => (
          <Grid item xs={12} key={p.title}>
            <ProjectCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
