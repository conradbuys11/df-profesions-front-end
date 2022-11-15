import "./FrTypeTable.css";
import { useState } from "react";
import FReagentTypeInfo from "./FReagentTypeInfo";
import Table from "react-bootstrap/esm/Table";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { displayIconMedium, qualityToImgClass } from "../../Common";

const FrTypeTable = (props) => {
  // props: professionName

  const [db, apiNavigation] = useOutletContext();
  const fReagentTypeInfo = FReagentTypeInfo();
  const [activeKeys, setActiveKeys] = useState([]);

  const makeFrTypeInfo = (professionName) => {
    return fReagentTypeInfo.types
      .filter((type) => type.professionUsedFor === professionName)
      .map((type, index) => (
        <div key={`type-${index}`}>
          <p className="text-lrg-bold">{type.name}</p>
          <p className="text-med">{type.description}</p>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Effect</th>
                <th>Made By</th>
              </tr>
            </thead>
            <tbody>{makeFrTableRow(type)}</tbody>
          </Table>
        </div>
      ));
  };

  const makeFrTableRow = (type) => {
    const items = apiNavigation.getItems().finishingReagents().byType(type);
    try {
      return items.map((item, index) => {
        const recipe = apiNavigation.getRecipe().byItemId(item.id);
        const professionName = apiNavigation
          .getProfession()
          .byId(recipe.professionId).name;
        return (
          <tr key={`type-item-${index}`}>
            {/* TODO: make helper method in Common or something */}
            <td>
              {item.icon
                ? displayIconMedium(item.icon, qualityToImgClass(item.quality))
                : "(ICON)"}{" "}
              <Link to={`/items/${item.id}`}>{item.name}</Link>
            </td>
            <td>{item.onUse}</td>
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

  return props.professionName ? (
    <div className="Fr-Type-Table">
      <h2 className="header-med">{props.professionName}</h2>
    </div>
  ) : (
    <></>
  );
};

export default FrTypeTable;
