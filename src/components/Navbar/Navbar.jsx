import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImUserTie, ImGithub, ImLinkedin, ImMail } from "react-icons/im";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaEmpire } from "react-icons/fa";
import "./Navbar.css"

const Navigbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
        <Link className="btn navBtn" to="/">
              <FaEmpire /> Home
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className="btn navBtn" to="/about">
              <ImUserTie /> About
            </Link>
            <Link className="btn navBtn" to="projects">
              <RiCodeBoxFill /> Projects
            </Link>
              <a className="btn navBtn" href="https://github.com/higashi04"><ImGithub /> Github Profile</a>
              <a className="btn navBtn" href="https://www.linkedin.com/in/cesar-higashi-8638b317b/">
              <ImLinkedin /> LinkedIn Profile
            </a>
            <Link className="btn navBtn" to="contact">
              <ImMail /> Contact Me
            </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Navigbar;
