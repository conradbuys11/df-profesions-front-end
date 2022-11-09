import "./ItemPageCraftedBy.css";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";

const ItemPageCraftedBy = (props) => {
  //props: item

  const craftedByRows = () => {
    return props.item.recipes.map((recipe) => {
      // we're making a row that has the following info:
      // for each recipe, we want to know the recipe name/link, and what profession it is crafted by/link
      return (
        <tr key={`recipe-${recipe.id}`}>
          <td>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </td>
          <td>
            <Link to={`/professions/${recipe.profession.name}`}>
              {recipe.profession.name}
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>Crafted by:</h3>
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
