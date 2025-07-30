import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setExpanded(false); // Collapse the navbar
  };

  return (
    <Navbar expanded={expanded} onToggle={setExpanded} collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => handleNavClick('/')} style={{ cursor: "pointer" }}>
          <h1>LoopMeet</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick("/aljk23")}>Join as Guest</Nav.Link>
          
          
            <Nav.Link onClick={() => handleNavClick("/auth")}>Register</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("/auth")}>
              <button className="btn btn-warning btn-sm">Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
