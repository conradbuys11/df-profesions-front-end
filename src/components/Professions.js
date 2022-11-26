import React from "react";
import "./Professions.css";
import ProfessionButton from "./ProfessionButton.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { websiteLooksLikeCrapNotice } from "../Common";

const Professions = (props) => {
  // right now we're manually inserting the names & data. and actually, that's probably gonna be how it stays on this specific page
  // but for the profession pages, recipes, items, etc. - we're gonna be doing fetches from the DB
  // so the props we're gonna be passing down to those things will be minimal

  let buttonKey = 0;
  const iconURL = (profName) => {
    return `https://wow.zamimg.com/images/wow/icons/large/ui_profession_${profName}.jpg`;
  };
  const craftingProfessions = [
    { name: "Alchemy", icon: iconURL("alchemy") },
    { name: "Blacksmithing", icon: iconURL("blacksmithing") },
    { name: "Enchanting", icon: iconURL("enchanting") },
    { name: "Engineering", icon: iconURL("engineering") },
    { name: "Inscription", icon: iconURL("inscription") },
    { name: "Jewelcrafting", icon: iconURL("jewelcrafting") },
    { name: "Leatherworking", icon: iconURL("leatherworking") },
    { name: "Tailoring", icon: iconURL("tailoring") },
  ];
  const gatheringProfessions = [
    { name: "Herbalism", icon: iconURL("herbalism") },
    { name: "Mining", icon: iconURL("mining") },
    { name: "Skinning", icon: iconURL("skinning") },
  ];
  const secondaryProfessions = [
    { name: "Cooking", icon: iconURL("cooking") },
    { name: "Fishing", icon: iconURL("fishing") },
  ];

  const makeProfessionButtons = (arr) => {
    return arr.map((prof) => {
      // console.log(`Name: ${prof.name}. Icon: ${prof.icon}`)
      buttonKey += 1;
      return (
        <ProfessionButton key={buttonKey} name={prof.name} icon={prof.icon} />
      );
    });
  };

  const craftingButtons = makeProfessionButtons(craftingProfessions);
  const gatheringButtons = makeProfessionButtons(gatheringProfessions);
  const secondaryButtons = makeProfessionButtons(secondaryProfessions);

  return (
    <div className="Professions navbar-margin">
      <Container style={{ padding: 0 }}>
        <div className="odd-section">
          <h2 className="header-lrg">Crafting Professions:</h2>
          <hr className="divider" />
          {/* justify-content-center basically centers the columns.
                  ie if the amount of rows does not fill out the entire column, they'll be centered. */}
          <Row className="justify-content-center">{craftingButtons}</Row>
        </div>
        <div className="even-section">
          <h2 className="header-lrg">Gathering Professions:</h2>
          <hr className="divider" />
          <Row className="justify-content-center">{gatheringButtons}</Row>
        </div>
        <div className="odd-section">
          <h2 className="header-lrg">Secondary Professions:</h2>
          <Row className="justify-content-center">{secondaryButtons}</Row>
        </div>
      </Container>
    </div>
  );
};

export default Professions;
