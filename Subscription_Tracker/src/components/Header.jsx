import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'




function Header(){
    return (
        <Navbar expand="lg" className=" Nav ">
        <Container className=''>
          <Navbar.Brand href="#home"><h1 className='Navbrand'>Subscription Tracker</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
             
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Header