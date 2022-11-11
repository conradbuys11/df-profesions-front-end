import "./ProfessionAccordionButton.css";
import Button from "react-bootstrap/Button";

const ProfessionAccordionButton = (props) => {
  const turnAllOff = () => props.setActiveKeys([]);
  const turnAllOn = () => props.setActiveKeys([0, 1, 2, 3]);

  const isEverythingOn = props.activeKeys.length > 0;

  return isEverythingOn ? (
    <Button variant="outline-primary" onClick={turnAllOff}>
      Close All Boxes
    </Button>
  ) : (
    <Button variant="outline-primary" onClick={turnAllOn}>
      Open All Boxes
    </Button>
  );
};

export default ProfessionAccordionButton;
