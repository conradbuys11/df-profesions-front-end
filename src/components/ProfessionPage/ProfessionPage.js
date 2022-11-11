import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  capitalizeWord,
  websiteLooksLikeCrapNotice,
  displayIconMedium,
  qualityToImgClass,
  checkFetchError,
} from "../../Common";
import "./ProfessionPage.css";
import ProfessionDescription from "./ProfessionDescription";
import RecipesSection from "./RecipesSection";

/*

TODO: add more profession info. descriptions of:
finishing reagents (first, category. ie, polishing cloth. then, who makes them (ie tailors)? then, all the examples of that reagent, in an accordion maybe?
tools & accessories (who makes them & maybe a link to the better versions?)

MAYBE TODO: separate other recipes into categories
ie, PvP Recipes. Raid Drop. Dungeon Drop. World Drop.

MAYBE TODO: allow folks to sort/filter by certain criteria
ie only trainer recipes, only renown recipes, sort by category, etc.
*/

const ProfessionPage = (props) => {
  const { name } = useParams();
  // const URL = 'http://localhost:3001';
  const [profession, setProfession] = useState({});
  const [activeKeys, setActiveKeys] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    let fetching = true;
    fetch(`${props.URL}/professions/by_name/${capitalizeWord(name)}`)
      .then((res) => checkFetchError(res))
      .then((data) => {
        if (fetching) {
          setProfession(data);
        }
      })
      .catch((e) => navigateTo("/oops"));

    return () => {
      fetching = false;
    };
  }, [name, props.URL, navigateTo]);

  const makeRow = (recipe, firstColumn) => {
    /* 
        "firstColumn" makes this reusable - ie, trainer recipes have the level needed for their first column,
        but renown recipes will have the rep & level, and specializations have specialization & level.
        */

    return (
      <tr key={`rc-row-${recipe.id}`}>
        <td>{firstColumn}</td>
        <td>
          {recipe.icon
            ? displayIconMedium(
                recipe.icon,
                qualityToImgClass(recipe.item.quality)
              )
            : "(ICON)"}{" "}
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </td>
        <td>{recipe.category}</td>
        <td>
          <ul>{makeMaterialTable(recipe.materials)}</ul>
        </td>
      </tr>
    );
  };

  const makeMaterialTable = (materials) => {
    return materials.map((material) => {
      return (
        <li key={`mt-${material.id}`} className="prof-list-item">
          {/* we basically want the data to look like this: 3x (icon) Chromatic Dust
                        first is quantity, then the icon, then the name */}
          {material.item.icon
            ? displayIconMedium(
                material.item.icon,
                qualityToImgClass(material.item.quality)
              )
            : "(ICON)"}{" "}
          {material.quantity}x{" "}
          <Link to={`/items/${material.item.id}`}>{material.item.name}</Link>
        </li>
      );
    });
  };

  //temp function while we're not calling on DB

  return (
    <div className="Profession-Page">
      {websiteLooksLikeCrapNotice()}
      <ProfessionDescription
        professionName={capitalizeWord(name)}
        profession={profession}
      />
      {profession ? (
        <RecipesSection
          profession={profession}
          activeKeys={activeKeys}
          setActiveKeys={setActiveKeys}
          makeRow={makeRow}
          URL={props.URL}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfessionPage;
