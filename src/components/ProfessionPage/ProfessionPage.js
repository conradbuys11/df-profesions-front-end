import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  capitalizeWord,
  websiteLooksLikeCrapNotice,
  displayIconMedium,
  displayIconLarge,
} from "../../Common";
import SpecializationRecipes from "./SpecializationRecipes";
import TrainerRecipes from "./TrainerRecipes";
import RenownRecipes from "./RenownRecipes";
import OtherRecipes from "./OtherRecipes";
import "./ProfessionPage.css";
import Accordion from "react-bootstrap/Accordion";
import ProfessionAccordionButton from "./ProfessionAccordionButton";
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
  const [recipes, setRecipes] = useState(null);
  const [activeKeys, setActiveKeys] = useState([]);

  let recipeKey = 0;

  useEffect(() => {
    let fetching = true;
    fetch(`${props.URL}/professions/by_name/${capitalizeWord(name)}`)
      .then((res) => res.json())
      .then((data) => {
        if (fetching) {
          setProfession(data);
          fetch(`${props.URL}/recipes/by_profession/${data.id}`)
            .then((r) => r.json())
            .then((d) => {
              if (fetching) {
                setRecipes(d);
              }
            });
        }
      });

    return () => {
      fetching = false;
    };
  }, [name, props.URL]);

  const makeRow = (recipe, firstColumn) => {
    /* 
        "firstColumn" makes this reusable - ie, trainer recipes have the level needed for their first column,
        but renown recipes will have the rep & level, and specializations have specialization & level.
        */

    return (
      <tr key={`rc-row-${recipe.id}`}>
        <td>{firstColumn}</td>
        <td>
          {recipe.icon ? displayIconMedium(recipe.icon) : "(ICON)"}{" "}
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
            ? displayIconMedium(material.item.icon)
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
      <ProfessionDescription profession={profession} />
      <RecipesSection
        profession={profession}
        activeKeys={activeKeys}
        setActiveKeys={setActiveKeys}
        makeRow={makeRow}
        URL={props.URL}
      />
    </div>
  );
};

export default ProfessionPage;
