import { React } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import HeaderSearchBar from "./HeaderSearchBar";
import "./Header.css";

const Header = (props) => {
  // props: db, apiNavigation (for our HeaderSearchBar)
  return (
    <div className="Header">
      <Navbar sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand id="header-logo">DF Professions</Navbar.Brand>
          </LinkContainer>
          <Nav className="justify-content-center">
            <HeaderSearchBar
              db={props.db}
              apiNavigation={props.apiNavigation}
            />
          </Nav>
          <Navbar.Toggle aria-controls="navbar-pages" />
          <Navbar.Collapse id="navbar-pages" className="justify-content-end">
            <Nav>
              <LinkContainer to="/basics">
                <Nav.Link className="header-page">Basics</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/professions">
                <Nav.Link className="header-page">Profession List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link className="header-page">Contact (NYI)</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
