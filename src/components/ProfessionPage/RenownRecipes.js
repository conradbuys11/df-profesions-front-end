import { React } from "react";
import "./RenownRecipes.css";
import RecipeTable from "./RecipeTable";
import ApiNavigation from "../../ApiNavigation";
import { useOutletContext } from "react-router-dom";

const RenownRecipes = (props) => {
  //props: profession (object), URL, makeRow (method, takes recipe & level learned)

  return (
    <RecipeTable
      eventKey={props.eventKey}
      profession={props.profession}
      URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_renown_recipes`}
      thisClass={"Renown-Recipes"}
      recipesFrom={"Reputation/Renown"}
      firstColumnName={"Renown & Rank"}
      keyName={"requiredRenownLevel"}
      recipes={props.recipes}
      apiNavigation={props.apiNavigation}
      activeKeys={props.activeKeys}
      setActiveKeys={props.setActiveKeys}
    />
  );
};

export default RenownRecipes;
