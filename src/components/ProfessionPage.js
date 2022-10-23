import {React} from "react";
import { useParams } from "react-router-dom";
import ItemPage from "./ItemPage";
import RecipePage from "./RecipePage";
import './ProfessionPage.css';

/*
the info that professions have in the DB:
id, name, icon,
tools (item, has many), first_accessories (item, has many), recipes (has many), specializations (has many)

the info we're gonna need for displaying recipes:
recipe name, icon, required prof level, required renown & specialization level (incase that's part of that)
probably more stuff like materials but let's stick with the basics rn

will probably want to break this into multiple pages/components
ie a Trainer Recipes section/component, a Renown Recipes section/component, Specialization Recipes, PvP Recipes, Other Recipes
that way we can easily break up the sections & have space between them
*/

const ProfessionPage = props => {

    const { name } = useParams();
    let backupID = 0;

    const getBackupID = () => {
        backupID += 1;
        return backupID;
    }

    //this should really go in a separate library of helper functions
    const capitalizeWord = word => {
        return (word.charAt(0).toUpperCase() + word.slice(1))
    }

    //temp function while we're not calling on DB
    const iconURL = `https://wow.zamimg.com/images/wow/icons/large/ui_profession_${name}.jpg`;

    const displayRecipe = recipe => {
        return(
            <div></div>
        )
    }

    const displayItem = item => {
        return(
            /* 
            AM I SHOWING ITEMS? OR RECIPES?

            do i really need to be giving it these props? it's just gonna get the info from the DB on load anyway
            might want to make a separate thing for an "item card" - ie, has the basic info (name, stacks, etc.)
            which needs props, and loads the item page (ie ALL the info) on click
            */
            <ItemPage id={item.id ? item.id : getBackupID()} name={item.name} icon={item.icon} />
        )
    }

    return(
        <div className="Profession-Page">
            <img src={iconURL} alt={`${name} icon`}/>
            <h1 className="big-heading">Dragonflight {capitalizeWord(name)}</h1>
        </div>
    )
}

export default ProfessionPage;