import {React} from "react";
import './TrainerRecipes.css';
import RecipeTable from "./RecipeTable";

const TrainerRecipes = props => {

    //props: profession (object), URL, makeRow (method, takes recipe & level learned)
    // should really make a component for like, small item card. like an item with its icon, hover over to get a bit more info, click for full info.

    return(
        <RecipeTable eventKey={props.eventKey} profession={props.profession} URL={`${props.URL}/recipes/by_profession/${props.profession.id}/only_trainer_recipes`} 
        makeRow={props.makeRow} thisClass={"Trainer-Recipes"} recipesFrom={"Profession Trainer"} firstColumnName={"Level"} keyName={"requiredProfessionLevel"} />
    )
}

export default TrainerRecipes;