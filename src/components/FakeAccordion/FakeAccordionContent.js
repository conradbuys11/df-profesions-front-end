import "./FakeAccordionContent.css";
import Fade from "react-bootstrap/esm/Fade";
import React from "react";

const FakeAccordionContent = (props) => {
  // props: isSectionActive (with an index already), divider

  return (
    <Fade unmountOnExit={true} in={props.isSectionActive}>
      <div>{props.children}</div>
    </Fade>
  );
};

export default FakeAccordionContent;
