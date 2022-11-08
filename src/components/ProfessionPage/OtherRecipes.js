import { React } from "react";
import "./OtherRecipes.css";
import RecipeTable from "./RecipeTable";

const RenownRecipes = (props) => {
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
    />
  );
};

export default RenownRecipes;
