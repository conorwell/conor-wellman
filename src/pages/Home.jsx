import { Container, Grid } from '@mui/material'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Other from '../components/Other'

export default function Home() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Hero />
          </Grid>

          <Grid item xs={12} md={8}>
            <Projects />
            <Experience />
            <Other />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
