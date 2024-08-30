import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll"; // Importing Scroll Link for smooth scrolling
import { Link } from "react-router-dom";

import logo from "./assets/images/reliefeg-logo-120.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(!expanded);

  return (
    <Navbar expand="lg" className="navbar" variant="dark" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand as={ScrollLink} to="home" className="navbar-brand">
          <img
            src={logo}
            alt="ReliefEG Logo"
            style={{ width: "80px", height: "57px", top: 0 }}
            onClick={handleNavCollapse}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
          onClick={handleNavCollapse}
        />
        <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
          <Nav className="navbar-nav ms-auto" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              className="nav-item"
              onClick={handleNavCollapse}
            >
              Home
            </Nav.Link>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="nav-item nav-link"
              onClick={handleNavCollapse}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-item nav-link"
              onClick={handleNavCollapse}
            >
              Contact Us
            </ScrollLink>
            <Nav.Link
              as={Link}
              to="/donate"
              className="nav-links nav-links-button"
              onClick={handleNavCollapse}
            >
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
