import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const defaultTheme = createTheme()
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    h1: {
      fontSize: 48,
      [defaultTheme.breakpoints.down('sm')]: {},
      // [defaultTheme.breakpoints.down('sm')]: {
      //   fontSize: 18,
      // },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
