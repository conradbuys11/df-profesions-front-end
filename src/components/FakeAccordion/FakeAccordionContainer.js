import "./FakeAccordionContainer.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FakeAccordionButton from "./FakeAccordionButton";

const FakeAccordionContainer = (props) => {
  // props: isSectionActive, handleSectionClick, headers, colSize,
  // (these next props are for the show all/hide all buttons) handleShowAll, handleHideAll

  const makeAccordionButtonsArray = () => {
    let arr = props.headers.map((header, index) => (
      <Col lg={props.colSize} key={`f-accordion-${index}`}>
        <FakeAccordionButton
          header={header}
          isSectionActive={props.isSectionActive[index]}
          handleSectionClick={() => props.handleSectionClick(index)}
        />
      </Col>
    ));
    arr.push(
      <Col lg={props.colSize} key={`f-accordion-show-all`}>
        <FakeAccordionButton
          header={"Show All"}
          isSectionActive={false}
          handleSectionClick={props.handleShowAll}
        />
      </Col>
    );
    arr.push(
      <Col lg={props.colSize} key={`f-accordion-hide-all`}>
        <FakeAccordionButton
          header={"Hide All"}
          isSectionActive={false}
          handleSectionClick={props.handleHideAll}
        />
      </Col>
    );
    return arr;
  };
  const makeAccordionButtons = () => {
    return props.headers ? (
      makeAccordionButtonsArray()
    ) : (
      <>Hey, you didn't give the container any headers.</>
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
