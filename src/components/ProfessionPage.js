import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { keyToWords, largeIconToMedium } from '../Common'
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
    const [recipes, setRecipes] = useState([]);
    let recipeKey = 0;

    useEffect(() => {
        let fetching = true;
        fetch(`${URL}/professions/by_name/${capitalizeWord(name)}`)
        .then(res => res.json())
        .then(data => {
            if(fetching){
                setProfession(data);
                fetch(`${URL}/recipes/by_profession/${data.id}`)
                .then(r => r.json())
                .then(d => {
                    if(fetching){
                        setRecipes(d);
                    }
                })
            }
        })

        return () => {
            fetching = false;
        }
    }, [name]);

    const makeRow = (recipe, firstColumn) => {
        /* 
        "firstColumn" makes this reusable - ie, trainer recipes have the level needed for their first column,
        but renown recipes will have the rep & level, and specializations have specialization & level.
        */

        return(
            <tr>
                <td>{firstColumn}</td>
                <td>{recipe.item.icon ? <img src={largeIconToMedium(recipe.item.icon)} alt="" /> : "(ICON)"} {recipe.name}</td>
                <td>{recipe.category}</td>
                <td>
                    <ul>
                        {makeMaterialTable(recipe.materials)}
                    </ul>
                </td>
                <td>
                    <ul>
                        {makeFinishingReagentTable(recipe.finishingReagents)}            
                    </ul>
                </td>
            </tr>
        )
    }

    const makeMaterialTable = materials => {
        let rows = [];
        try{
            materials.forEach(material => {
                recipeKey += 1;
                rows.push(
                    <li key={`mt-${recipeKey}`} className="prof-list-item">
                        {/* we basically want the data to look like this: 3x (icon) Chromatic Dust
                        first is quantity, then the icon, then the name */}
                        {material.quantity}x {material.item.icon ? <img src={largeIconToMedium(material.item.icon)} alt=""/> : "(ICON)"} {material.item.name}
                    </li>
                )
            })
            return rows;
        } catch(error){
            console.log(error);
        }
    }

    const makeFinishingReagentTable = fReagents => {
        let rows = [];
        try{
            fReagents.forEach(fReagent => {
                recipeKey += 1;
                rows.push(
                    <li key={`fr-${recipeKey}`} className="prof-list-item">
                        {/* if we have any finishing reagents, we use our gross helper method to convert the key/value pair to words 
                        otherwise, we completely ignore putting data in 
                        might want to put the check BEFORE the push? */}
                        {fReagent.reagentType}{Object.keys(fReagent.requiredSpecializationLevel).length > 0 ? ` (via ${fReagentSpecLevelToWords(fReagent.requiredSpecializationLevel)})` : ""}
                    </li>
                )
            })
            return rows;
        } catch(error){
            console.log(error)
        }
    }

    const fReagentSpecLevelToWords = obj => {
        let length = Object.keys(obj).length
        let text = ""
        if(length === 1){
            return keyToWords(Object.keys(obj)[0])
        }
        else if(length > 1){
            for(let i = 0; i < length; i++){
                let rawName = Object.keys(obj)[i];
                let keyName = keyToWords(rawName);
                //valueNum is a really disgusting way of saying, get value of the key at position i
                console.log(Object.getOwnPropertyDescriptor(obj, rawName));
                let valueNum = Object.getOwnPropertyDescriptor(obj, rawName).value;

                //if this is the last specialization/level, hit em with the "or this"
                if(i + 1 === length){
                    text += `or ${keyName} ${valueNum}`;
                }
                else{
                    text += `${keyName} ${valueNum}, `;
                }
                //example might be "Burning 10, Wafting 10, or Sophic 10"
            }
            return text;
        }
    }



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
            <TrainerRecipes profession={profession} URL={URL} makeRow={makeRow}/>
        </div>
    )
}

export default ProfessionPage;