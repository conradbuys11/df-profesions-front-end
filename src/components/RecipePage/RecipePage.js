import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  specOrRenownObjectToWords,
  keyToWords,
  websiteLooksLikeCrapNotice,
  isObjectEmpty,
  displayIconLarge,
  qualityToImgClass,
  checkFetchError,
} from "../../Common";
import "./RecipePage.css";

const RecipePage = (props) => {
  // props: URL

  // TODO: split this into components, there's way too much stuff in here

  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigateTo = useNavigate();

  useEffect(() => {
    let fetching = true;
    fetch(`${props.URL}/recipes/${id}`)
      .then((res) => checkFetchError(res))
      .then((data) => {
        if (fetching) {
          setRecipe(data);
        }
      })
      .catch((e) => navigateTo("/oops"));

    return () => {
      fetching = false;
    };
  }, [props.URL, id, navigateTo]);

  // creates the html for where we learn this recipe from (trainer, spec, etc.)
  const displayLearnedFromInfo = () => {
    let text = "";
    if (recipe.requiredProfessionLevel) {
      text = `Profession Trainer (Level ${recipe.requiredProfessionLevel})`;
    } else if (recipe.requiredRenownLevel) {
      // specOrRenownObjectToWords gives us an array. index 0 = rep name, index 1 = level needed
      let renownRequirementArray = specOrRenownObjectToWords(
        recipe.requiredRenownLevel
      );
      text = `Reputation/Renown (${renownRequirementArray[0]}: ${renownRequirementArray[1]})`;
    } else if (recipe.requiredSpecializationLevel) {
      //see above for description of specOrRenownObjectToWords
      let specRequirementArray = specOrRenownObjectToWords(
        recipe.requiredSpecializationLevel
      );
      if (recipe.specialAcquisitionMethod) {
        text = `${recipe.specialAcquisitionMethod} (while having ${specRequirementArray[0]} ${specRequirementArray[1]})`;
      } else {
        text = `Specialization Level (${specRequirementArray[0]}: ${specRequirementArray[1]})`;
      }
    } else if (recipe.specialAcquisitionMethod) {
      text = recipe.specialAcquisitionMethod;
    }

    return <>{text}</>;
  };

  const makeMaterialList = (materials) => {
    //this is eerily similar to makeMaterialTable in ProfessionPage
    //might wanna refactor into one method in Common or something

    let rows = [];
    materials.forEach((material) => {
      rows.push(
        <li key={`mt-${material.id}`}>
          {/* one again want data to look like this:
                    3x (icon) Item Name */}
          {material.item.icon
            ? displayIconLarge(
                material.item.icon,
                qualityToImgClass(material.item.quality)
              )
            : "(ICON)"}{" "}
          {material.quantity}x{" "}
          <Link to={`/items/${material.item.id}`}>{material.item.name}</Link>
        </li>
      );
    });
    return rows;
  };

  const makeFinishingReagentList = (fReagents) => {
    let rows = [];
    try {
      fReagents.forEach((fReagent) => {
        rows.push(
          <li key={`fr-${fReagent.id}`} className="prof-list-item">
            {/* if we have any finishing reagents, we use our gross helper method to convert the key/value pair to words 
                            otherwise, we completely ignore putting data in 
                            might want to put the check BEFORE the push? */}
            {fReagent.reagentType}
            {Object.keys(fReagent.requiredSpecializationLevel).length > 0
              ? ` (via ${fReagentSpecLevelToWords(
                  fReagent.requiredSpecializationLevel
                )})`
              : ""}
          </li>
        );
      });
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  const fReagentSpecLevelToWords = (obj) => {
    let length = Object.keys(obj).length;
    let text = "";
    if (length === 1) {
      return keyToWords(Object.keys(obj)[0]);
    } else if (length > 1) {
      for (let i = 0; i < length; i++) {
        let rawName = Object.keys(obj)[i];
        let keyName = keyToWords(rawName);
        //valueNum is a really disgusting way of saying, get value of the key at position i
        let valueNum = Object.getOwnPropertyDescriptor(obj, rawName).value;

        //if this is the last specialization/level, hit em with the "or this"
        if (i + 1 === length) {
          text += `or ${keyName} ${valueNum}`;
        } else {
          text += `${keyName} ${valueNum}, `;
        }
        //example might be "Burning 10, Wafting 10, or Sophic 10"
      }
      return text;
    }
  };

  /*
    all the info i need to put in:
    profession
    item link & amount crafted
    category, skill up amount, difficulty
    where it is learned (five types - trainer, renown, specialization, other, other w/ specialization)
    required location, notes
    */

  return (
    // if we haven't loaded our info yet, just hit em with some loading text
    isObjectEmpty(recipe) ? (
      <h1 className="header-xl">Loading...</h1>
    ) : (
      <div className="Recipe-Page">
        {websiteLooksLikeCrapNotice()}
        {recipe.icon ? (
          displayIconLarge(
            recipe.icon,
            `img-centered ${qualityToImgClass(recipe.item.quality)}`
          )
        ) : (
          <h5 className="temp-center">(ICON)</h5>
        )}
        <h1 className="header-xl">{recipe.name}</h1>
        <h2 className="header-med">
          <Link to={`/items/${recipe.item.id}`}>Item Page</Link>
        </h2>
        <div className="recipe-component">
          <p className="recipe-page-pg">
            Profession:{" "}
            {
              <Link to={`/professions/${recipe.profession.name.toLowerCase()}`}>
                {recipe.profession.name}
              </Link>
            }
          </p>
          <p className="recipe-page-pg">
            Crafts{" "}
            <Link to={`/items/${recipe.item.id}`}>{recipe.item.name}</Link> x
            {recipe.numberCrafted}.
          </p>
          {recipe.skillUpAmount > 1 ? (
            <p>
              <span>{`Gives ${recipe.skillUpAmount} profession levels on craft! (while orange)`}</span>
            </p>
          ) : (
            <></>
          )}
          <p>
            <span>Category:</span> {recipe.category}
          </p>
          {recipe.difficulty ? (
            <p>
              <span>Difficulty:</span> {recipe.difficulty}
            </p>
          ) : (
            <></>
          )}
          <p>
            <span>Required Location:</span>{" "}
            {recipe.requiredLocation ? recipe.requiredLocation : "N/A"}
          </p>
          <p>
            <span>Obtained From:</span> {displayLearnedFromInfo()}
          </p>
          {recipe.notes ? (
            <p>
              <span>(Notes on obtaining: {recipe.notes})</span>
            </p>
          ) : (
            <></>
          )}
          <h3>Materials Needed:</h3>
          <ul>{makeMaterialList(recipe.materials)}</ul>
          {recipe.finishingReagents.length === 0 ? (
            <></>
          ) : (
            <>
              <h3>Finishing Reagents:</h3>
              <ul>{makeFinishingReagentList(recipe.finishingReagents)}</ul>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default RecipePage;
