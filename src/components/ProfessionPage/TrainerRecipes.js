import { React } from "react";
import "./TrainerRecipes.css";
import RecipeTable from "./RecipeTable";
import ApiNavigation from "../../ApiNavigation";
import { useOutletContext } from "react-router-dom";

const TrainerRecipes = (props) => {
  //props: profession (object), URL, makeRow (method, takes recipe & level learned)
  // should really make a component for like, small item card. like an item with its icon, hover over to get a bit more info, click for full info.

  return (
    <RecipeTable
      eventKey={props.eventKey}
      profession={props.profession}
      URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_trainer_recipes`}
      thisClass={"Trainer-Recipes"}
      recipesFrom={"Profession Trainer"}
      firstColumnName={"Level"}
      keyName={"requiredProfessionLevel"}
      recipes={props.recipes}
      apiNavigation={props.apiNavigation}
      activeKeys={props.activeKeys}
      setActiveKeys={props.setActiveKeys}
    />
  );
};

export default TrainerRecipes;
