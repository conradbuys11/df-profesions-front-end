import React from "react";
import "./ProfessionButton.css";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

//props are name (ie Engineering) and icon (the URL to wowhead icon)
const ProfessionButton = (props) => {
  //navigate basically just allows us to use react router's functionality w/o using a Link component (aka mucking up the css)
  const navigate = useNavigate();

  const handleClick = (e) => {
    let path = `/professions/${props.name}`;
    navigate(path.toLowerCase());
  };

  const isFinishedProfession = (name) => {
    // this is a temp thing, while I only have a few professions with completed seeded data
    // if it's one of the professions I've finished, make it hoverable and what not (return true)
    // otherwise, return false
    return (
      name === "Engineering" ||
      name === "Tailoring" ||
      name === "Alchemy" ||
      name === "Blacksmithing" ||
      name === "Enchanting" ||
      name === "Inscription" ||
      name === "Leatherworking" ||
      name === "Jewelcrafting" ||
      name === "Cooking"
    );
  };

  return (
    <Col lg="3" md="4" sm="6">
      {isFinishedProfession(props.name) ? (
        <div className="Profession-Button" onClick={handleClick}>
          <img
            className="prof-button-icon"
            src={props.icon}
            alt={`${props.name} Icon`}
          />
          <h5 className="prof-button-name">{props.name}</h5>
        </div>
      ) : (
        <div className="Disabled-Profession-Button">
          <img
            className="prof-button-icon"
            src={props.icon}
            alt={`${props.name} Icon`}
          />
          <h5 className="prof-button-name" style={{ color: "white" }}>
            {props.name} (unavailable)
          </h5>
        </div>
      )}
    </Col>
  );
};

export default ProfessionButton;
