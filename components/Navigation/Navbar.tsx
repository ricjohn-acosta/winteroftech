import React from "react";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { css } from "@emotion/react";
import Image from "next/image";

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
          paddingLeft: 30,
          paddingRight: 30,
          // boxShadow: "#3e4042 0px -1px 1px inset",
          backgroundColor: "#394867",
          backdropFilter: "blur(20px)",
          boxShadow: "none",
          // backgroundColor: 'rgba(0,0,0,0.6)',
          // background: '#000d28',
          color: "#F1F6F9",
          // borderBottomLeftRadius: '20px',
          // borderBottomRightRadius: '20px',
        }}
      >
        <Toolbar>
          {/*<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}

          <Box sx={{ flexGrow: 1 }}>
            <Image src={"/images/winteroftech-symbol.png"} height={40} width={35} alt="" />
            <Image src={"/images/winteroftech-text.png"} height={40} width={130} alt="" />
          </Box>

          {/*<Button color="inherit">Login</Button>*/}
          {/*<Button color="inherit">Sign up</Button>*/}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
