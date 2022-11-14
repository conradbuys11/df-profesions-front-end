import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import "./RecipeTable.css";
import { specOrRenownObjectToWords } from "../../Common";
import Accordion from "react-bootstrap/Accordion";

const RecipeTable = (props) => {
  //props: eventKey, profession (obj), makeRow (method, takes recipe & level learned),
  // thisClass, recipesFrom, firstColumnName, keyName,
  // activeKeys, setActiveKeys,
  // recipes

  //this url is gonna be custom - ie the full thing, not just localhost:3001

  let thisClass = props.thisClass;
  // let sortingMethod = props.sortingMethod;
  const recipes = props.recipes;
  // const [recipes, setRecipes] = useState(null);

  // useEffect(() => {
  //   // let fetching = true;
  //   // if (props.URL && props.profession.id) {
  //   //   fetch(props.URL)
  //   //     .then((res) => res.json())
  //   //     .then((data) => {
  //   //       if (fetching) {
  //   //         setRecipes(data);
  //   //       }
  //   //     });
  //   // }
  //   setRecipes(sortingMethod());
  // }, [thisClass, sortingMethod]);

  const setKeys = () => {
    //if our key is currently in the array of active keys, turn it off
    //otherwise, add it to it
    props.activeKeys.includes(props.eventKey)
      ? props.setActiveKeys(
          props.activeKeys.filter((key) => key !== props.eventKey)
        )
      : props.setActiveKeys([...props.activeKeys, props.eventKey]);
  };

  const processFirstColumn = (recipe, keyName) => {
    let keyValue = Object.getOwnPropertyDescriptor(recipe, keyName).value;
    if (typeof keyValue === "object") {
      let output = "";
      //since specialization/renown is an object with NameOfSpecOrRenown as key, and the number as its value,
      //we need to get the name of that key, then put the number after
      //the helper method in Common (specOrRenownObjectToWords) will give us an array
      //index 0 is our key (formatted as we want), index 1 is the level needed
      let keyAndValueOfSpecOrRenown = specOrRenownObjectToWords(keyValue);
      output = `${keyAndValueOfSpecOrRenown[0]} (${keyAndValueOfSpecOrRenown[1]})`;
      return output;
    }
    return keyValue;
  };

  const makeAllRows = () => {
    //key name is what our first column is, ie requiredProfessionLevel or requiredSpecializationLevel
    //Object.getOwnPropertyDescriptor.value basically just says hey, get the value of this key (property descriptor) in this object
    return recipes.map((recipe) => {
      return props.makeRow(recipe, processFirstColumn(recipe, props.keyName));
    });
  };

  const accordionBody = () => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>{props.firstColumnName ? props.firstColumnName : ""}</th>
            <th>Name</th>
            <th>Category</th>
            <th>Materials</th>
          </tr>
        </thead>

        <tbody>
          {recipes && recipes.length !== 0 ? (
            makeAllRows()
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  };

  return (
    <Accordion.Item eventKey={props.eventKey} className={thisClass}>
      <Accordion.Header onClick={setKeys}>
        {props.recipesFrom ? `Recipes from ${props.recipesFrom}` : "Recipes"}
      </Accordion.Header>
      <Accordion.Body>
        {/* if recipes is null (its default), we say that we're loading
        if recipes is an array with stuff in it, we have loaded stuff
        if recipes is an array with nothing it in, we say there's no info */}
        {!recipes ? (
          <h2>Loading...</h2>
        ) : recipes.length > 0 ? (
          accordionBody()
        ) : (
          <h2>No recipes found.</h2>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default RecipeTable;
