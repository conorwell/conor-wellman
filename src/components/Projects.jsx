import { Typography, Grid } from "@mui/material"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects"

export default function Projects() {
  return (
    <section id="projects">

      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={3}>

        {projects.map((p) => (
          <Grid item xs={12} md={6} key={p.title}>
            <ProjectCard {...p} />
          </Grid>
        ))}

      </Grid>

    </section>
  )
}