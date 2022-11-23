import "./FakeAccordionButton.css";

const FakeAccordionButton = (props) => {
  // props: header, isSectionActive, handleSectionClick

  return (
    <div
      className={`Fake-Accordion-Button ${
        props.isSectionActive ? "f-button-active" : ""
      }`}
      onClick={props.handleSectionClick}
    >
      <span className="f-button-text">
        {props.header ? props.header : "Error"}
      </span>
    </div>
  );
};

export default FakeAccordionButton;
