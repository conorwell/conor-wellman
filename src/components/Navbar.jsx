import { AppBar, Toolbar, Button, Box } from "@mui/material"

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>

        <Box sx={{ flexGrow: 1 }} />

        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#experience">Experience</Button>
        <Button color="inherit" href="#other">Other</Button>

      </Toolbar>
    </AppBar>
  )
}