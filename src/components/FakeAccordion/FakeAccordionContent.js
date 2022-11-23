import "./FakeAccordionContent.css";
import Fade from "react-bootstrap/esm/Fade";
import React from "react";

const FakeAccordionContent = (props) => {
  // props: isSectionActive (with an index already), divider

  const children = React.Children.toArray(props.children);
  if (props.divider) {
    children.push(<hr className="divider" />);
  }
  console.log(children);

  return (
    <Fade unmountOnExit={true} in={props.isSectionActive}>
      <div>{children}</div>
    </Fade>
  );
};

export default FakeAccordionContent;
