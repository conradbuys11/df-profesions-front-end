import {React} from "react";
import './TrainerRecipes.css';
import Table from 'react-bootstrap/Table';

const TrainerRecipes = props => {

    // should really make a component for like, small item card. like an item with its icon, hover over to get a bit more info, click for full info.

    const getIconURL = fileName => {
        let url = `https://wow.zamimg.com/images/wow/icons/medium/${fileName}.jpg`
        return url;
    }

    const makeDummyRecipe = (name, iconName, requiredProfLevel, category, reagents) => {
        //TO BE USED WHEN NOT USING DB DATA/TESTING
        return {
            name: name,
            iconName: iconName,
            requiredProfLevel: requiredProfLevel,
            category: category,
            reagents: reagents
        };
    }

    const makeRow = recipe => {
        return(
            <tr>
                <td>{recipe.requiredProfLevel}</td>
                <td><img src={getIconURL(recipe.iconName)} alt="img"/> {recipe.name}</td>
                <td>{recipe.category}</td>
                {/* reagents are gonna be their own table, huh */}
            </tr>
        )
    }

    let writOfVersatility = makeDummyRecipe("Writ of Versatility", "ui_profession_enchanting", 1, "Ring Enchantments");
    let enchantedWrithebarkWand = makeDummyRecipe("Enchanted Writhebark Wand", "inv_wand_1h_kultirasquest_b_01", 5, "Rods and Wands");
    let scepterOfSpectacleAir = makeDummyRecipe("Scepter of Spectacle: Air", "inv_wand_04", 20, "Illusory Goods");

    return(
        <div className="Trainer-Recipes">
            <h5>Recipes from Profession Trainer</h5>

            <Table striped>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Reagents</th>
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