import "./ItemPageCraftedBy.css";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import {
  displayIconMedium,
  qualityToImgClass,
  displayIconMediumScaling,
} from "../../Common";

const ItemPageCraftedBy = (props) => {
  //props: craftedBy, apiNavigation

  const craftedByRows = () => {
    return props.craftedBy.map((recipe) => {
      // we're making a row that has the following info:
      // for each recipe, we want to know the recipe name/link, and what profession it is crafted by/link
      const profName = props.apiNavigation
        .getProfession()
        .byId(recipe.professionId).name;
      const item = props.apiNavigation.getItem().byId(recipe.itemId);
      return (
        <tr key={`recipe-${recipe.id}`}>
          <td>
            {recipe.icon ? (
              displayIconMediumScaling(
                recipe.icon,
                qualityToImgClass(item.quality)
              )
            ) : (
              <span>(ICON)</span>
            )}{" "}
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </td>
          <td>
            <Link to={`/professions/${profName}`}>{profName}</Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="odd-section">
      <h2 className="header-med">Crafted by:</h2>
      <Table>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Profession</th>
          </tr>
        </thead>

        <tbody>{craftedByRows()}</tbody>
      </Table>
    </div>
  );
};

export default ItemPageCraftedBy;
