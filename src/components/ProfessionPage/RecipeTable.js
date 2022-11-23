import { React } from "react";
import Table from "react-bootstrap/esm/Table";
import "./RecipeTable.css";
import { specOrRenownObjectToWords } from "../../Common";
import { displayIconMedium, qualityToImgClass } from "../../Common";
import { Link } from "react-router-dom";

const RecipeTable = (props) => {
  //props: eventKey, profession (obj), makeRow (method, takes recipe & level learned),
  // thisClass, recipesFrom, firstColumnName, keyName,
  // activeKeys, setActiveKeys,
  // recipes, apiNavigation

  // let thisClass = props.thisClass;
  const recipes = props.recipes;

  // const setKeys = () => {
  //   //if our key is currently in the array of active keys, turn it off
  //   //otherwise, add it to it
  //   props.activeKeys.includes(props.eventKey)
  //     ? props.setActiveKeys(
  //         props.activeKeys.filter((key) => key !== props.eventKey)
  //       )
  //     : props.setActiveKeys([...props.activeKeys, props.eventKey]);
  // };

  const makeRow = (recipe, firstColumn) => {
    /*
    "firstColumn" makes this reusable - ie, trainer recipes have the level needed for their first column,
    but renown recipes will have the rep & level, and specializations have specialization & level.
    */

    const recipeItem = props.apiNavigation.getItem().byId(recipe.itemId);
    const recipeMaterials = props.apiNavigation
      .getMaterials()
      .byRecipeId(recipe.id);

    return (
      <tr key={`rc-row-${recipe.id}`}>
        <td>{firstColumn}</td>
        <td>
          {recipe.icon
            ? displayIconMedium(
                recipe.icon,
                `${qualityToImgClass(recipeItem.quality)} icon-shrink`
              )
            : "(ICON)"}{" "}
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </td>
        <td className="hide-md">{recipe.category}</td>
        <td>
          <ul>{makeMaterialTable(recipeMaterials)}</ul>
        </td>
      </tr>
    );
  };

  const makeMaterialTable = (materials) => {
    return materials.map((material) => {
      const item = props.apiNavigation.getItem().byId(material.itemId);
      return (
        <li key={`mt-${material.id}`} className="prof-list-item">
          {/* we basically want the data to look like this: 3x (icon) Chromatic Dust
                        first is quantity, then the icon, then the name */}
          {item.icon
            ? displayIconMedium(
                item.icon,
                `${qualityToImgClass(item.quality)} icon-shrink`
              )
            : "(ICON)"}{" "}
          {material.quantity}x <Link to={`/items/${item.id}`}>{item.name}</Link>
        </li>
      );
    });
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
      return makeRow(recipe, processFirstColumn(recipe, props.keyName));
    });
  };

  const accordionBody = () => {
    return (
      <div>
        <h2 className="header-lrg">{props.recipesFrom}</h2>
        <Table striped>
          <thead>
            <tr>
              <th>{props.firstColumnName ? props.firstColumnName : ""}</th>
              <th>Name</th>
              <th className="hide-md">Category</th>
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
      </div>
    );
  };

  // return (
  //   <Accordion.Item eventKey={props.eventKey} className={thisClass}>
  //     <Accordion.Header onClick={setKeys}>
  //       {props.recipesFrom ? `Recipes from ${props.recipesFrom}` : "Recipes"}
  //     </Accordion.Header>
  //     <Accordion.Body>
  //       {/* if recipes is null (its default), we say that we're loading
  //       if recipes is an array with stuff in it, we have loaded stuff
  //       if recipes is an array with nothing it in, we say there's no info */}
  //       {!recipes ? (
  //         <h2>Loading...</h2>
  //       ) : recipes.length > 0 ? (
  //         accordionBody()
  //       ) : (
  //         <h2>No recipes found.</h2>
  //       )}
  //     </Accordion.Body>
  //   </Accordion.Item>
  // );

  return accordionBody();
};

export default RecipeTable;
