import React from "react";
import { List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ImUserTie, ImGithub, ImLinkedin, ImMail } from "react-icons/im";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaEmpire } from "react-icons/fa";
const DrawerList = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemButton>
            <Link to="/">
              <FaEmpire /> Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="/about">
              <ImUserTie /> About
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <a href="https://github.com/higashi04">
              <ImGithub /> Github Profile
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to='#'>
              <RiCodeBoxFill /> Projects
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
export default DrawerList;
