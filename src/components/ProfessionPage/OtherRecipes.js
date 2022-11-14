import { React } from "react";
import "./OtherRecipes.css";
import RecipeTable from "./RecipeTable";
import ApiNavigation from "../../ApiNavigation";
import { useOutletContext } from "react-router-dom";

const OtherRecipes = (props) => {
  //props: profession (object), URL, makeRow (method, takes recipe & level learned)

  return (
    <RecipeTable
      eventKey={props.eventKey}
      profession={props.profession}
      URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_other_recipes`}
      thisClass={"Other-Recipes"}
      recipesFrom={"Other Sources"}
      firstColumnName={"Source"}
      keyName={"specialAcquisitionMethod"}
      recipes={props.recipes}
      apiNavigation={props.apiNavigation}
      activeKeys={props.activeKeys}
      setActiveKeys={props.setActiveKeys}
    />
  );
};

export default OtherRecipes;
