import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg" className="z-1 bg-opacity-10 ">
            <Container>
                <Navbar.Brand href="/">Dogs App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link>*/}
                        {/*    <Link to="/">Dogs App</Link>*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link href="/finder">
                           Dogs Finder
                        </Nav.Link>
                        <Nav.Link href="/list" >
                          Dogs List
                        </Nav.Link>
                        <Nav.Link href="/favourites">
                            My Favourites
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;