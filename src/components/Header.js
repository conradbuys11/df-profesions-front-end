import {React} from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import './Header.css';


const Header = props => {
    return(
        <div className="Header">
            <Navbar>
                <Container>
                    <Navbar.Brand id="header-logo" href="/">DF Professions</Navbar.Brand>
                            {/* <input placeholder="Search (NYI)" /> */}
                    <Navbar.Toggle aria-controls="navbar-pages"/>
                    <Navbar.Collapse id="navbar-pages" className="justify-content-end">
                        <Nav>
                            <Nav.Link className="header-page" href="/basics">Basics</Nav.Link>
                            <Nav.Link className="header-page" href="/professions">Profession List</Nav.Link>
                            <Nav.Link className="header-page" href="/">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;