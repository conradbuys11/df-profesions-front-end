import {React, useEffect, useState} from "react";
import './TrainerRecipes.css';
import Table from 'react-bootstrap/Table';

const TrainerRecipes = props => {

    //props: profession (object), URL
    // should really make a component for like, small item card. like an item with its icon, hover over to get a bit more info, click for full info.

    // const [recipes, setRecipes] = useState({});

    // useEffect(() => {
    //     if(props.profession){
    //         fetch(`${props.URL}/recipes/by_profession/${props.profession.id}`)
    //         .then(res => res.json())
    //         .then(data => setRecipes(data));
    //     }
    // });

    let key = 0;

    const getIconURL = fileName => {
        let url = `https://wow.zamimg.com/images/wow/icons/medium/${fileName}.jpg`
        return url;
    }

    const makeDummyRecipe = (name, iconName, requiredProfLevel, category, materials, finishingReagents) => {
        //TO BE USED WHEN NOT USING DB DATA/TESTING
        return {
            name: name,
            iconName: iconName,
            requiredProfLevel: requiredProfLevel,
            category: category,
            materials: materials,
            finishingReagents: finishingReagents
        };
    }

    const makeRow = recipe => {
        return(
            <tr>
                <td>{recipe.requiredProfLevel}</td>
                <td><img src={getIconURL(recipe.iconName)} alt="img"/> {recipe.name}</td>
                <td>{recipe.category}</td>
                {/* materials are gonna be their own table, huh */}
                <td>
                    <table>
                        <tbody>
                            {materialProcessing(recipe.materials)}
                        </tbody>
                    </table>
                </td>
                <td>
                    <table>
                        <tbody>
                            {finishingReagentProcessing(recipe.finishingReagents)}
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }

    const materialProcessing = materials => {
        let rows = [];
        for(let i = 0; i < materials.length; i++){
            key += 1;
            rows.push(
                <tr key={key}>
                    {/* materials = array of arrays - each array will have quantity as its 
                    first element, name as its second element */}
                    <td>{materials[i][0]}x (ICON) {materials[i][1]}</td>
                </tr>
            )
        }
        return rows;
    }

    const finishingReagentProcessing = fReagents => {
        let rows = [];
        for(let i = 0; i < fReagents.length; i++){
            key += 1;
            rows.push(
                <tr key={key}>
                    {/* fReagents = array of arrays - each array will have category as its
                    first element, spec as its second element, level as its third element */}
                    <td>{fReagents[i][0]} (via {fReagents[i][1]} {fReagents[i][2]})</td>
                </tr>
            )
        }
        return rows;
    }

    let writOfVersatility = makeDummyRecipe("Writ of Versatility", "ui_profession_enchanting", 1, "Ring Enchantments", [[3, "Chromatic Dust"], [1, "Illustrious Shard"]], [["Lesser Illustrious Insight", "Magical Reinforcement", 30]]);
    let enchantedWrithebarkWand = makeDummyRecipe("Enchanted Writhebark Wand", "inv_wand_1h_kultirasquest_b_01", 5, "Rods and Wands", [[1, "Test"]], [["Test", "Test", 1]]);
    let scepterOfSpectacleAir = makeDummyRecipe("Scepter of Spectacle: Air", "inv_wand_04", 20, "Illusory Goods", [[1, "Test"]], [["Test", "Test", 1]]);

    return(
        <div className="Trainer-Recipes">
            <h5>Recipes from Profession Trainer</h5>

            <Table striped>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Materials</th>
                        <th>Finishing Reagents</th>
                    </tr>
                </thead>

                <tbody>
                    {makeRow(writOfVersatility)}
                    {makeRow(enchantedWrithebarkWand)}
                    {makeRow(scepterOfSpectacleAir)}
                </tbody>
            </Table>
        </div>
    )
}

export default TrainerRecipes;