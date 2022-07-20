import React from 'react'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { css } from '@emotion/react'

const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          paddingLeft: 32,
          paddingRight: 32,
          boxShadow: 'rgb(19 47 76) 0px -1px 1px inset',
          backgroundColor: 'rgba(10, 25, 41, 0.52)',
          backdropFilter: 'blur(20px)',

          // backgroundColor: 'rgba(0,0,0,0.6)',
          // background: '#000d28',
          color: '#F1F6F9',
          // borderBottomLeftRadius: '20px',
          // borderBottomRightRadius: '20px',
        }}
      >
        <Toolbar>
          {/*<IconButton*/}
          {/*  size="large"*/}
          {/*  edge="start"*/}
          {/*  color="inherit"*/}
          {/*  aria-label="menu"*/}
          {/*  sx={{ mr: 2 }}*/}
          {/*>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}

          <Box sx={{ flexGrow: 1 }}>
            <img src={'/images/winteroftech-symbol.png'} height={40} />
            <img src={'/images/winteroftech-text.png'} height={40} />
          </Box>

          {/*<Button color="inherit">Login</Button>*/}
          {/*<Button color="inherit">Sign up</Button>*/}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
