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
            <a href="https://www.linkedin.com/in/cesar-higashi-8638b317b/">
              <ImLinkedin /> LinkedIn Profile
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="projects">
              <RiCodeBoxFill /> Projects
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="contact">
              <ImMail /> Contact Me
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
export default DrawerList;
