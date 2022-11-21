import "./NewBasicsInfoButton.css";

const NewBasicsInfoButton = (props) => {
  // props: sectionId, header, handleSectionClick, isSectionActive (this is a single element of the array, NOT the full array.)

  return (
    <div
      className={`New-Basics-Info-Button ${
        props.isSectionActive ? "bib-active" : ""
      }`}
      onClick={() => props.handleSectionClick(props.sectionId)}
    >
      <span className={`info-button-text`}>
        {props.header ? props.header : "Error"}
      </span>
    </div>
  );
};

export default NewBasicsInfoButton;
