import "./RecipeMaterials.css";
import { displayIconLarge, qualityToImgClass } from "../../Common";
import { Link } from "react-router-dom";

const RecipeMaterials = (props) => {
  // props: materials, apiNavigation

  const makeMaterialList = (materials) => {
    //this is eerily similar to makeMaterialTable in ProfessionPage
    //might wanna refactor into one method in Common or something
    return materials.map((material) => {
      const item = props.apiNavigation.getItem().byId(material.itemId);
      return (
        <li key={`mt-${material.id}`}>
          {/* one again want data to look like this:
                        3x (icon) Item Name */}
          {/* TODO: Make helper method in Common or something */}
          {item.icon
            ? displayIconLarge(item.icon, qualityToImgClass(item.quality))
            : "(ICON)"}{" "}
          {material.quantity}x <Link to={`/items/${item.id}`}>{item.name}</Link>
        </li>
      );
    });
  };

  return (
    <div>
      <h3>Materials Needed:</h3>
      <ul>{makeMaterialList(props.materials)}</ul>
    </div>
  );
};

export default RecipeMaterials;
