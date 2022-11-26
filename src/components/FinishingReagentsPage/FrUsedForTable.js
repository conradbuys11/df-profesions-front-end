import { Link, useOutletContext } from "react-router-dom";
import "./FrUsedForTable.css";
import Table from "react-bootstrap/esm/Table";
import { displayIconMediumScaling, qualityToImgClass } from "../../Common";

const FrUsedForTable = (props) => {
  //props: type
  const [db, apiNavigation] = useOutletContext();

  const makeFrTable = (type) => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Made By</th>
          </tr>
        </thead>
        <tbody>
          {apiNavigation
            .getRecipes()
            .byFinishingReagentType(type.name)
            .map((recipe, index) => makeFrRow(recipe, `recipe-${index}`))}
        </tbody>
      </Table>
    );
  };

  const makeFrRow = (recipe, keyName) => {
    try {
      const itemQuality = apiNavigation.getItem().byId(recipe.itemId).quality;
      const professionName = apiNavigation
        .getProfession()
        .byId(recipe.professionId).name;
      return (
        <tr key={keyName}>
          <td>
            {recipe.icon
              ? displayIconMediumScaling(
                  recipe.icon,
                  qualityToImgClass(itemQuality)
                )
              : "(ICON)"}{" "}
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </td>
          <td>{professionName}</td>
        </tr>
      );
    } catch (e) {
      console.log(
        `Error when trying to make Finishing Reagent Used For table row. Error info: ${e}`
      );
    }
  };

  return props.type ? (
    <div className="Fr-Used-For-Table even-section">
      <h2 className="header-med">Used in Crafting</h2>
      {makeFrTable(props.type)}
    </div>
  ) : (
    <></>
  );
};

export default FrUsedForTable;
