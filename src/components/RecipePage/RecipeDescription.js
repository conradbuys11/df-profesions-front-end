import "./RecipeDescription.css";
import { Link } from "react-router-dom";
import { specOrRenownObjectToWords } from "../../Common";

const RecipeDescription = (props) => {
  // props: recipe, profession, item

  const displayLearnedFromInfo = () => {
    // creates the html for where we learn this recipe from (trainer, spec, etc.)
    let text = "";
    if (props.recipe.requiredProfessionLevel) {
      text = `Profession Trainer (Level ${props.recipe.requiredProfessionLevel})`;
    } else if (props.recipe.requiredRenownLevel) {
      // specOrRenownObjectToWords gives us an array. index 0 = rep name, index 1 = level needed
      let renownRequirementArray = specOrRenownObjectToWords(
        props.recipe.requiredRenownLevel
      );
      text = `Reputation/Renown (${renownRequirementArray[0]}: ${renownRequirementArray[1]})`;
    } else if (props.recipe.requiredSpecializationLevel) {
      //see above for description of specOrRenownObjectToWords
      let specRequirementArray = specOrRenownObjectToWords(
        props.recipe.requiredSpecializationLevel
      );
      if (props.recipe.specialAcquisitionMethod) {
        text = `${props.recipe.specialAcquisitionMethod} (while having ${specRequirementArray[0]} ${specRequirementArray[1]})`;
      } else {
        text = `Specialization Level (${specRequirementArray[0]}: ${specRequirementArray[1]})`;
      }
    } else if (props.recipe.specialAcquisitionMethod) {
      text = props.recipe.specialAcquisitionMethod;
    }

    return <>{text}</>;
  };

  return (
    <div>
      <p className="recipe-page-pg">
        Profession:{" "}
        {
          <Link to={`/professions/${props.profession.name.toLowerCase()}`}>
            {props.profession.name}
          </Link>
        }
      </p>
      <p className="recipe-page-pg">
        Crafts <Link to={`/items/${props.item.id}`}>{props.item.name}</Link> x
        {props.recipe.numberCrafted}.
      </p>
      {props.recipe.skillUpAmount > 1 ? (
        <p>
          <span>{`Gives ${props.recipe.skillUpAmount} profession levels on craft! (while orange)`}</span>
        </p>
      ) : (
        <></>
      )}
      <p>
        <span>Category:</span> {props.recipe.category}
      </p>
      {props.recipe.difficulty ? (
        <p>
          <span>Difficulty:</span> {props.recipe.difficulty}
        </p>
      ) : (
        <></>
      )}
      <p>
        <span>Required Location:</span>{" "}
        {props.recipe.requiredLocation ? props.recipe.requiredLocation : "N/A"}
      </p>
      <p>
        <span>Obtained From:</span> {displayLearnedFromInfo()}
      </p>
      {props.recipe.notes ? (
        <p>
          <span>(Notes on obtaining: {props.recipe.notes})</span>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RecipeDescription;
