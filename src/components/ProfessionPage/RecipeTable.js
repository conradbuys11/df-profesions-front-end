import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import "./RecipeTable.css";
import { specOrRenownObjectToWords } from "../../Common";
import Accordion from "react-bootstrap/Accordion";

const RecipeTable = (props) => {
  //props: eventKey, profession (obj), URL, makeRow (method, takes recipe & level learned),
  // thisClass, recipesFrom, firstColumnName, keyName

  //this url is gonna be custom - ie the full thing, not just localhost:3001

  let thisClass = props.thisClass;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let fetching = true;
    if (props.URL && props.profession.id) {
      fetch(props.URL)
        .then((res) => res.json())
        .then((data) => {
          if (fetching) {
            setRecipes(data);
          }
        });
    }
  }, [props.URL, props.profession]);

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
          {recipes.legnth !== 0 ? (
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
      <Accordion.Header>
        {props.recipesFrom ? `Recipes from ${props.recipesFrom}` : "Recipes"}
      </Accordion.Header>
      <Accordion.Body>
        {recipes.length > 0 ? accordionBody() : <h2>Loading...</h2>}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default RecipeTable;
