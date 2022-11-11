import { React } from "react";
import "./OtherRecipes.css";
import RecipeTable from "./RecipeTable";

const OtherRecipes = (props) => {
  //props: profession (object), URL, makeRow (method, takes recipe & level learned)

  return (
    <RecipeTable
      eventKey={props.eventKey}
      profession={props.profession}
      URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_other_recipes`}
      makeRow={props.makeRow}
      thisClass={"Other-Recipes"}
      recipesFrom={"Other Sources"}
      firstColumnName={"Source"}
      keyName={"specialAcquisitionMethod"}
      activeKeys={props.activeKeys}
      setActiveKeys={props.setActiveKeys}
    />
  );
};

export default OtherRecipes;
