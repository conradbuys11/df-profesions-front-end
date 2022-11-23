import "./FakeAccordionContent.css";
import Fade from "react-bootstrap/esm/Fade";

const FakeAccordionContent = (props) => {
  // props: isSectionActive (with an index already)

  return (
    <Fade unmountOnExit={true} in={props.isSectionActive}>
      {props.children}
      <hr className="divider" />
    </Fade>
  );
};

export default FakeAccordionContent;
