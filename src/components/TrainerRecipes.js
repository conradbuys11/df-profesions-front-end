import {React, useEffect, useState} from "react";
import './TrainerRecipes.css';
import Table from 'react-bootstrap/Table';

const TrainerRecipes = props => {

    //props: profession (object), URL, makeRow (method, takes recipe & level learned)
    // should really make a component for like, small item card. like an item with its icon, hover over to get a bit more info, click for full info.

    const [recipes, setRecipes] = useState([]);

    let key = 0;

    useEffect(() => {
        let fetching = true;
        if(props.URL && props.profession.id){
            fetch(`${props.URL}/recipes/by_profession/${props.profession.id}/only_trainer_recipes`)
            .then(res => res.json())
            .then(data => {
                if(fetching){
                    setRecipes(data);
                }
            })
        }

        return () => {
            fetching = false;
        }
    }, [props.URL, props.profession]);

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

    const makeAllRows = () => {
        let rows = [];
        console.log(recipes);

        recipes.forEach(recipe => {
            rows.push(props.makeRow(recipe, recipe.requiredProfessionLevel));
        });
        return rows;
    }

    // let writOfVersatility = makeDummyRecipe("Writ of Versatility", "ui_profession_enchanting", 1, "Ring Enchantments", [[3, "Chromatic Dust"], [1, "Illustrious Shard"]], [["Lesser Illustrious Insight", "Magical Reinforcement", 30]]);
    // let enchantedWrithebarkWand = makeDummyRecipe("Enchanted Writhebark Wand", "inv_wand_1h_kultirasquest_b_01", 5, "Rods and Wands", [[1, "Test"]], [["Test", "Test", 1]]);
    // let scepterOfSpectacleAir = makeDummyRecipe("Scepter of Spectacle: Air", "inv_wand_04", 20, "Illusory Goods", [[1, "Test"]], [["Test", "Test", 1]]);

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
                    {recipes.length !== 0 ? makeAllRows() : <tr><td></td></tr>}
                </tbody>
            </Table>
        </div>
    )
}

export default TrainerRecipes;