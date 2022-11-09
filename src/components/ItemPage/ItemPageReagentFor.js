import "./ItemPageReagentFor.css";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import { largeIconToMedium } from "../../Common";

const ItemPageReagentFor = (props) => {
  // props: item

  const reagentForRows = () => {
    return props.item.materials.map((material) => {
      // also pretty simple, first td links to recipe, second td links to profession,
      // second td says how many of this item is needed for that recipe.

      // TODO: sort by profession, maybe?
      return (
        <tr key={`mt-${material.id}`}>
          <td>
            {material.recipe.item.icon ? (
              <img
                src={largeIconToMedium(material.recipe.item.icon)}
                alt="img icon"
              />
            ) : (
              <span>(ICON)</span>
            )}{" "}
            <Link to={`/recipes/${material.recipe.id}`}>
              {material.recipe.name}
            </Link>
          </td>
          <td>
            <Link to={`/professions/${material.recipe.profession.name}`}>
              {material.recipe.profession.name}
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
