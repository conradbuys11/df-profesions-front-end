import "./RecipeBanner.css";
import { displayIconLarge, qualityToImgClass } from "../../Common";
import { Link } from "react-router-dom";

const RecipeBanner = (props) => {
  //props: recipe, item

  return (
    <div className="Recipe-Banner">
      {props.recipe.icon ? (
        displayIconLarge(
          props.recipe.icon,
          `img-centered ${qualityToImgClass(props.item.quality)}`
        )
      ) : (
        <h5 className="temp-center">(ICON)</h5>
      )}
      <h1 className="header-xl">{props.recipe.name}</h1>
      <h2 className="header-med">
        <Link to={`/items/${props.item.id}`}>Item Page</Link>
      </h2>
      <hr className="divider" />
    </div>
  );
};

export default RecipeBanner;
