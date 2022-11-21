import React from "react";
import "./HomepageWelcome.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import miningArt from "../../img/WoW_Professions_Mining_004.png";

const HomepageWelcome = (props) => {
  return (
    <div id="Homepage-Welcome" className="homepage-component">
      <h1 className="header-xl">
        Welcome to Conrad's WoW: Dragonflight Profession Page
      </h1>
      <hr className="divider" />
      <Container>
        <Row className="align-items-center">
          <Col lg={5} xs={{ span: 12 /* order: "last" */ }}>
            <div className="welcome-paragraph">
              <p className="text-lrg">
                Professions are changing a LOT in 10.0, and navigating all the
                changes can be daunting. I've created this website to help
                familiarize some of these changes in a pleasing & simple way.
              </p>
              <p className="text-lrg">
                This website is still very much a WIP, but should be all set up
                by 10.0's launch on November 28th!
              </p>
            </div>
          </Col>

          <Col lg={7} xs={{ span: 12 /* order: "first" */ }}>
            <img src={miningArt} alt="mining art" className="key-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomepageWelcome;
