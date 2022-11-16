import "./FrTypeTable.css";
import FReagentTypeInfo from "./FReagentTypeInfo";
import Table from "react-bootstrap/esm/Table";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { displayIconMedium, qualityToImgClass } from "../../Common";

const FrTypeTable = (props) => {
  // props: type, frKey,
  // useName (bool, whether we want a header [if it's on the Reagents page] or no header [if it's on the Reagent page])

  const [db, apiNavigation] = useOutletContext();

  const removeWhenCraftingText = (effect) => {
    return effect.replace("When crafting: ", "");
  };

  const makeFrTable = (type, key) => {
    return (
      <div className="Fr-Type-Table" key={key ? key : ""}>
        {props.useName ? <p className="text-lrg-bold">{type.name}</p> : <></>}
        <p className="text-med">{type.description}</p>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Effect</th>
              <th>Made By</th>
            </tr>
          </thead>
          <tbody>{makeFrTableRow(type.name)}</tbody>
        </Table>
      </div>
    );
  };

  const makeFrTableRow = (type) => {
    const items = apiNavigation.getItems().finishingReagents().byType(type);
    try {
      return items.map((item, index) => {
        const recipe = apiNavigation.getRecipe().byItemId(item.id);
        const professionName = recipe
          ? apiNavigation.getProfession().byId(recipe.professionId).name
          : "N/A";
        return (
          <tr key={`type-item-${index}`}>
            {/* TODO: make helper method in Common or something */}
            <td>
              {item.icon
                ? displayIconMedium(item.icon, qualityToImgClass(item.quality))
                : "(ICON)"}{" "}
              <Link to={`/items/${item.id}`}>{item.name}</Link>
            </td>
            <td>{removeWhenCraftingText(item.effect)}</td>
            <td>{professionName}</td>
          </tr>
        );
      });
    } catch (e) {
      console.log(
        `Error when trying to make Finishing Reagent Type table row. Error info: ${e}`
      );
    }
  };

  return props.type ? (
    props.frKey ? (
      makeFrTable(props.type, props.frKey)
    ) : (
      makeFrTable(props.type)
    )
  ) : (
    <></>
  );
};

export default FrTypeTable;
