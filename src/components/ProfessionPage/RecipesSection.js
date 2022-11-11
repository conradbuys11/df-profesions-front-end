import "./RecipesSection.css";
import SpecializationRecipes from "./SpecializationRecipes";
import TrainerRecipes from "./TrainerRecipes";
import RenownRecipes from "./RenownRecipes";
import OtherRecipes from "./OtherRecipes";
import "./ProfessionPage.css";
import Accordion from "react-bootstrap/Accordion";
import ProfessionAccordionButton from "./ProfessionAccordionButton";

const RecipesSection = (props) => {
  //props: profession, activeKeys, setActiveKeys, makeRow, URL
  return (
    <div id="Recipes-Section">
      <h1 className="header-lrg">Recipes</h1>
      <Accordion
        alwaysOpen="true"
        flush
        defaultActiveKey={[]}
        activeKey={props.activeKeys}
      >
        <ProfessionAccordionButton
          activeKeys={props.activeKeys}
          setActiveKeys={props.setActiveKeys}
        />
        <TrainerRecipes
          eventKey={0}
          profession={props.profession}
          URL={props.URL}
          makeRow={props.makeRow}
          activeKeys={props.activeKeys}
          setActiveKeys={props.setActiveKeys}
        />
        <SpecializationRecipes
          eventKey={1}
          profession={props.profession}
          URL={props.URL}
          makeRow={props.makeRow}
          activeKeys={props.activeKeys}
          setActiveKeys={props.setActiveKeys}
        />
        <RenownRecipes
          eventKey={2}
          profession={props.profession}
          URL={props.URL}
          makeRow={props.makeRow}
          activeKeys={props.activeKeys}
          setActiveKeys={props.setActiveKeys}
        />
        <OtherRecipes
          eventKey={3}
          profession={props.profession}
          URL={props.URL}
          makeRow={props.makeRow}
          activeKeys={props.activeKeys}
          setActiveKeys={props.setActiveKeys}
        />
      </Accordion>
    </div>
  );
};

export default RecipesSection;
