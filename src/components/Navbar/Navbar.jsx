import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { ImUserTie, ImGithub, ImLinkedin, ImMail } from "react-icons/im";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaEmpire } from "react-icons/fa";
import Logo from "../../assets/ch.png";
import { Link, Outlet } from "react-router-dom";

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
            <List>
              <ListItem>
                <ListItemButton>
                  <Link to="/">
                    <FaEmpire /> Home
                  </Link>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton>
                  <Link to="/about">
                    <ImUserTie /> About
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Typography>
        </Box>
      </Drawer>
      <Outlet />
    </>
  );
};

export default TemporaryDrawer;
