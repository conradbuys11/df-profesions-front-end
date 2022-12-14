import { React } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import HeaderSearchBar from "./HeaderSearchBar";
import "./Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
  // props: db, apiNavigation (for our HeaderSearchBar)
  return (
    // <div id="Header">
    <Navbar id="Header" fixed="top" expand="xl" collapseOnSelect>
      <Container>
        <Row className="align-items-center">
          <Col
            lg={{ span: "auto", offset: 0 }}
            xs={{ span: 7, order: 1, offset: 1 }}
          >
            <LinkContainer to="/">
              <Navbar.Brand className="header-logo">
                DF Professions
              </Navbar.Brand>
            </LinkContainer>
          </Col>
          <Col
            lg={{ order: 2, span: true, offset: 0 }}
            xs={{ span: 10, offset: 1, order: 3 }}
          >
            <Nav className="justify-content-center">
              <HeaderSearchBar
                db={props.db}
                apiNavigation={props.apiNavigation}
              />
            </Nav>
          </Col>
          <Col lg={{ span: "auto", order: 3 }} xs={{ span: 4, order: 2 }}>
            <Navbar.Toggle aria-controls="navbar-pages" />
            <Navbar.Collapse className="justify-content-end" id="navbar-pages">
              <Nav>
                <LinkContainer to="/basics">
                  <Nav.Link className="header-page">Basics</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/professions">
                  <Nav.Link className="header-page">Profession List</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/items/finishingreagents">
                  <Nav.Link className="header-page">
                    Finishing Reagents
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link className="header-page">Contact/FAQ</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
    // </div>
  );
};

export default Header;
