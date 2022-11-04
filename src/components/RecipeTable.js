import {React, useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import './RecipeTable.css';

const RecipeTable = props => {

    //props: profession (obj), URL, makeRow (method, takes recipe & level learned), thisClass, recipesFrom, firstColumnName
    //this url is gonna be custom - ie the full thing, not just localhost:3001

    let thisClass = props.thisClass;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let fetching = true;
        if(props.URL && props.profession.id){
            fetch(props.URL)
            .then(res => res.json())
            .then(data => {
                if(fetching){
                    setRecipes(data);
                }
            })
        }

    }, [props.URL, props.profession]);

    const makeAllRows = () => {
        let rows = [];
        console.log(recipes);

        recipes.forEach(recipe => {
            rows.push(props.makeRow(recipe, recipe.requiredProfessionLevel));
        });
        return rows;
    }

    return(
        <div className={thisClass}>
            <h5>{props.recipesFrom ? `Recipes from ${props.recipesFrom}` : "Recipes"}</h5>

            <Table striped>
                <thead>
                    <tr>
                        <th>{props.firstColumnName ? props.firstColumnName : ""}</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Materials</th>
                        <th>Finishing Reagents</th>
                    </tr>
                </thead>

                <tbody>
                    {recipes.legnth !== 0 ? makeAllRows() : <tr><td></td></tr>}
                </tbody>
            </Table>
        </div>
    )
}

export default RecipeTable;