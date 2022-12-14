import "./RecipesSection.css";
import SpecializationRecipes from "./SpecializationRecipes";
import TrainerRecipes from "./TrainerRecipes";
import RenownRecipes from "./RenownRecipes";
import OtherRecipes from "./OtherRecipes";
import "./ProfessionPage.css";
import Accordion from "react-bootstrap/Accordion";
import ProfessionAccordionButton from "./ProfessionAccordionButton";
import { useState } from "react";
import FakeAccordion from "../FakeAccordion/FakeAccordion";

const RecipesSection = (props) => {
  //props: profession, URL, apiNavigation
  //the four sets of recipes - trainerRecipes, specializationRecipes, renownRecipes, otherRecipes

  const [activeKeys, setActiveKeys] = useState([]);
  const headers = [
    "Profession Trainer",
    "Specialization Level",
    "Reputation/Renown",
    "Other Sources",
  ];
  const content = [
    <TrainerRecipes
      eventKey={0}
      profession={props.profession}
      URL={props.URL}
      activeKeys={activeKeys}
      setActiveKeys={setActiveKeys}
      recipes={props.recipes.current.trainerRecipes}
      apiNavigation={props.apiNavigation}
    />,
    <SpecializationRecipes
      eventKey={1}
      profession={props.profession}
      URL={props.URL}
      activeKeys={activeKeys}
      setActiveKeys={setActiveKeys}
      recipes={props.recipes.current.specializationRecipes}
      apiNavigation={props.apiNavigation}
    />,
    <RenownRecipes
      eventKey={2}
      profession={props.profession}
      URL={props.URL}
      activeKeys={activeKeys}
      setActiveKeys={setActiveKeys}
      recipes={props.recipes.current.renownRecipes}
      apiNavigation={props.apiNavigation}
    />,
    <OtherRecipes
      eventKey={3}
      profession={props.profession}
      URL={props.URL}
      activeKeys={activeKeys}
      setActiveKeys={setActiveKeys}
      recipes={props.recipes.current.otherRecipes}
      apiNavigation={props.apiNavigation}
    />,
  ];

  return (
    <div id="Recipes-Section">
      <h1 className="header-lrg hide-md">Recipes From:</h1>
      <FakeAccordion
        sections={4}
        headers={headers}
        colSize={3}
        content={content}
        dropdownMenuName={"Recipes From"}
      />
      {/* <Accordion
        alwaysOpen="true"
        flush
        defaultActiveKey={[]}
        activeKey={activeKeys}
      >
        <ProfessionAccordionButton
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
        />
        <TrainerRecipes
          eventKey={0}
          profession={props.profession}
          URL={props.URL}
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
          recipes={props.recipes.current.trainerRecipes}
          apiNavigation={props.apiNavigation}
        />
        <SpecializationRecipes
          eventKey={1}
          profession={props.profession}
          URL={props.URL}
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
          recipes={props.recipes.current.specializationRecipes}
          apiNavigation={props.apiNavigation}
        />
        <RenownRecipes
          eventKey={2}
          profession={props.profession}
          URL={props.URL}
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
          recipes={props.recipes.current.renownRecipes}
          apiNavigation={props.apiNavigation}
        />
        <OtherRecipes
          eventKey={3}
          profession={props.profession}
          URL={props.URL}
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
          recipes={props.recipes.current.otherRecipes}
          apiNavigation={props.apiNavigation}
        />
      </Accordion> */}
    </div>
  );
};

export default RecipesSection;
