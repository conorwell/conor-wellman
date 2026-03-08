import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import Home from "./pages/Home"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3EB489"
    },
    background: {
      default: "#FAF9F6"
    }
  },
  typography: {
    fontFamily: "Inter, system-ui"
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}