import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function NavBar(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={()=>{
                            props.setDisplay(0);
                        }} className='hm'>Boierkotha</Navbar.Brand>
                    <Nav className="navbar-right">
                        <Nav.Link onClick={()=>{
                            props.setDisplay(0);
                        }}>হোম </Nav.Link>
                        <Nav.Link onClick={()=>{
                            props.setDisplay(1);
                        }}>সার্চ </Nav.Link>
                        <Nav.Link onClick={()=>{
                            props.setDisplay(2);
                        }}>বিষয়ভিত্তিক হাদীস </Nav.Link>
                        <Nav.Link onClick={()=>{
                            props.setDisplay(3);
                        }}>বই </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;