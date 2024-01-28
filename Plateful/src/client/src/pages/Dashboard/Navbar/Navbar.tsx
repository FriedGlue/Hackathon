import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css';
import Logo from '../../../assets/logo.png';

function NavbarScroll() {
  return (
    <Navbar sticky="top" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/" >
          <img
            alt="LRP logo"
            src={Logo}
            width="80"
            height="60"
            className="d-inline-block align-top"
          /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="https://news.vcu.edu/article/2021/10/little-ram-pantries-will-provide-emergency-food-assistance-to-vcu-students">Learn More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;
