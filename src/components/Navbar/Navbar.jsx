import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import Logo from "../../assets/ch.png";
import { Outlet } from "react-router-dom";

import DrawerList from "../DrawerListItems/DrawerList";

const drawerWidth = 240
const TemporaryDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const classes = {
    drawer: {
      width: drawerWidth,
      background: 'black',
      ".MuiDrawer-paper": {
        width: drawerWidth,
        background: 'black',
      },
    },
  }
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <img className="logo" src={Logo} alt="logo" />
      </IconButton>
      <Drawer
         sx={classes.drawer}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <DrawerList/>
          </Typography>
        </Box>
      </Drawer>
      <Outlet />
    </>
  );
};

export default TemporaryDrawer;
