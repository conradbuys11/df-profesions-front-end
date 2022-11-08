import { React } from "react";
import "./RenownRecipes.css";
import RecipeTable from "./RecipeTable";

const RenownRecipes = (props) => {
  //props: profession (object), URL, makeRow (method, takes recipe & level learned)

  return (
    <RecipeTable
      eventKey={props.eventKey}
      profession={props.profession}
      URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_renown_recipes`}
      makeRow={props.makeRow}
      thisClass={"Renown-Recipes"}
      recipesFrom={"Reputation/Renown"}
      firstColumnName={"Renown & Rank"}
      keyName={"requiredRenownLevel"}
    />
  );
};

export default RenownRecipes;
