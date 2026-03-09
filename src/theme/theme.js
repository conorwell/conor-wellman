import { createTheme } from '@mui/material'

const shared = {
  palette: {
    primary: {
      main: '#3EB489',
      light: '#C2E8D5',
      dark: '#12362A',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui',
  },
}

export const lightTheme = createTheme({
  ...shared,
  palette: {
    ...shared.palette,
    mode: 'light',
    background: {
      default: '#FAF9F6',
    },
  },
})

export const darkTheme = createTheme({
  ...shared,
  palette: {
    ...shared.palette,
    mode: 'dark',
    background: {
      default: '#141414',
      paper: '#1E1E1E',
    },
  },
})
