import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Authentify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to ="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to ="/products">
            <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Reports" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Reports</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to ="/signup" >
            <Nav.Link >
              Sign Up
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
             Login
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/connect">
              <Nav.Link>
             Connect
            </Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;