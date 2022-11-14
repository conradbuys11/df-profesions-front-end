import { React } from "react";
import "./SpecializationRecipes.css";
import RecipeTable from "./RecipeTable";
import ApiNavigation from "../../ApiNavigation";
import { useOutletContext } from "react-router-dom";

const SpecializationRecipes = (props) => {
  //props: profession (object), URL, makeRow (method, takes recipe & level learned)

  return (
    <RecipeTable
      eventKey={props.eventKey}
      profession={props.profession}
      URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_specialization_recipes`}
      thisClass={"Specialization-Recipes"}
      recipesFrom={"Specialization Levels"}
      firstColumnName={"Spec & Level"}
      keyName={"requiredSpecializationLevel"}
      recipes={props.recipes}
      apiNavigation={props.apiNavigation}
      activeKeys={props.activeKeys}
      setActiveKeys={props.setActiveKeys}
    />
  );
};

export default SpecializationRecipes;
