import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import "./RecipeTable.css";
import { keyToWords } from "../Common";
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
      //getOwnPropertyNames will return an array of the keys in our object - we only have one key in this object
      let nestedKeyName = Object.getOwnPropertyNames(keyValue)[0];
      output += keyToWords(nestedKeyName);
      //put a space, then get the number that's located in our object (the value of nestedKeyName)
      output += ` ${
        Object.getOwnPropertyDescriptor(keyValue, nestedKeyName).value
      }`;
      return output;
    }
    return keyValue;
  };

  const makeAllRows = () => {
    //key name is what our first column is, ie requiredProfessionLevel or requiredSpecializationLevel
    //Object.getOwnPropertyDescriptor.value basically just says hey, get the value of this key (property descriptor) in this object
    let rows = [];
    recipes.forEach((recipe) => {
      rows.push(
        props.makeRow(recipe, processFirstColumn(recipe, props.keyName))
      );
    });
    return rows;
  };

  return (
      <Accordion.Item eventKey={props.eventKey} className={thisClass}>
        <Accordion.Header>{props.recipesFrom ? `Recipes from ${props.recipesFrom}` : "Recipes"}</Accordion.Header>
        <Accordion.Body>
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
                {recipes.legnth !== 0 ? (
                makeAllRows()
                ) : (
                <tr>
                    <td></td>
                </tr>
                )}
            </tbody>
            </Table>
        </Accordion.Body>
      </Accordion.Item>
  );
};

export default RecipeTable;
