import "./ItemPageReagentFor.css";
import Table from "react-bootstrap/esm/Table";
import { Link, useOutletContext } from "react-router-dom";
import { displayIconMedium, qualityToImgClass } from "../../Common";
import { useEffect } from "react";

const ItemPageReagentFor = (props) => {
  // props: reagentFor, apiNavigation
  const apiNavigation = useOutletContext()[1];

  // useEffect(() => {
  //   console.log(apiNavigation);
  // });

  const reagentForRows = () => {
    return props.reagentFor.map((material) => {
      // also pretty simple, first td links to recipe, second td links to profession,
      // second td says how many of this item is needed for that recipe.
      const recipe = apiNavigation.getRecipe().byId(material.recipeId);
      const item = apiNavigation.getItem().byId(recipe.itemId);
      const profession = apiNavigation
        .getProfession()
        .byId(recipe.professionId);

      // TODO: sort by profession, maybe?
      return (
        <tr key={`mt-${material.id}`}>
          <td>
            {recipe.icon ? (
              displayIconMedium(recipe.icon, qualityToImgClass(item.quality))
            ) : (
              <span>(ICON)</span>
            )}{" "}
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </td>
          <td>
            <Link to={`/professions/${profession.name}`}>
              {profession.name}
            </Link>
          </td>
          <td>{material.quantity}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>Used in Crafting:</h3>
      <Table>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Profession</th>
            <th>Amount Needed</th>
          </tr>
        </thead>

        <tbody>{reagentForRows()}</tbody>
      </Table>
    </div>
  );
};

export default ItemPageReagentFor;
