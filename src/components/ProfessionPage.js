import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemPage from "./ItemPage";
import TrainerRecipes from "./TrainerRecipes";
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

do i also want to allow folks to sort/filter by certain criteria?
the answer is yes i just need to plan it out
ie only trainer recipes, only renown recipes, sort by category, etc.
*/

const ProfessionPage = props => {

    const { name } = useParams();
    const URL = 'http://localhost:3001';
    const [profession, setProfession] = useState({});

    useEffect(() => {
        fetch(`${URL}/professions/by_name/${capitalizeWord(name)}`)
        .then(res => res.json())
        .then(data => {
            setProfession(data);
        })
    })



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

    return(
        <div className="Profession-Page">
            <img src={iconURL} alt={`${name} icon`}/>
            <h1 className="header-xl">Dragonflight {capitalizeWord(name)}</h1>
            <h4>Under Construction - Temp Page</h4>
            <br /> <br />
            <TrainerRecipes profession={profession} URL={URL}/>
        </div>
    )
}

export default ProfessionPage;