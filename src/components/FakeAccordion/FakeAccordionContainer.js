import "./FakeAccordionContainer.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FakeAccordionButton from "./FakeAccordionButton";

const FakeAccordionContainer = (props) => {
  // props: isSectionActive, handleSectionClick, headers, colSize

  const makeAccordionButtons = () => {
    props.headers ? (
      props.headers.map((header, index) => (
        <Col lg={props.colSize} key={`f-accordion-${index}`}>
          <FakeAccordionButton
            header={header}
            isSectionActive={props.isSectionActive[index]}
            handleSectionClick={() => props.handleSectionClick(index)}
          />
        </Col>
      ))
    ) : (
      <></>
    );
  };

  return (
    <div className="Fake-Accordion-Container">
      <Container>
        <Row xs={"auto"} className={"justify-content-center"}>
          {makeAccordionButtons()}
        </Row>
      </Container>
    </div>
  );
};

export default FakeAccordionContainer;
