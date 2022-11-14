import { useState, useEffect, useRef } from "react";
import {
  useParams,
  Link,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import {
  capitalizeWord,
  websiteLooksLikeCrapNotice,
  displayIconMedium,
  qualityToImgClass,
  checkFetchError,
  isObjectEmpty,
} from "../../Common";
import "./ProfessionPage.css";
import ProfessionDescription from "./ProfessionDescription";
import RecipesSection from "./RecipesSection";
import ApiNavigation from "../../ApiNavigation";

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
  const db = useOutletContext();
  const [profession, setProfession] = useState({});
  // const [trainerRecipes, setTrainerRecipes] = useState(null);
  // const [specializationRecipes, setSpecializationRecipes] = useState(null);
  // const [renownRecipes, setRenownRecipes] = useState(null);
  // const [otherRecipes, setOtherRecipes] = useState(null);
  const trainerRecipes = useRef(null);
  const specializationRecipes = useRef(null);
  const renownRecipes = useRef(null);
  const otherRecipes = useRef(null);
  const [activeKeys, setActiveKeys] = useState([]);
  const navigateTo = useNavigate();
  const apiNavigation = ApiNavigation(db);

  useEffect(() => {
    // let fetching = true;
    // fetch(`${props.URL}/professions/by_name/${capitalizeWord(name)}`)
    //   .then((res) => checkFetchError(res))
    //   .then((data) => {
    //     if (fetching) {
    //       setProfession(data);
    //     }
    //   })
    //   .catch((e) => navigateTo("/oops"));

    // return () => {
    //   fetching = false;
    // };

    // if the db object is null, that means we failed, and we should navigate to /oops
    if (db) {
      // default for the db object is {}. so we need to wait for it to be actually populated before we start setting stuff.
      // we just don't do anything if db is an empty object
      if (!isObjectEmpty(db)) {
        try {
          const prof = apiNavigation.getProfession().byName(name);
          setProfession(prof);
          trainerRecipes.current = apiNavigation
            .getRecipes()
            .byProfession(prof.id)
            .onlyTrainerRecipes();

          specializationRecipes.current = apiNavigation
            .getRecipes()
            .byProfession(prof.id)
            .onlySpecializationRecipes();

          renownRecipes.current = apiNavigation
            .getRecipes()
            .byProfession(prof.id)
            .onlyRenownRecipes();

          otherRecipes.current = apiNavigation
            .getRecipes()
            .byProfession(prof.id)
            .onlyOtherRecipes();
        } catch (e) {
          console.log("Hey here's your error: " + e);
        }
      }
    } else {
      navigateTo("/oops");
    }
    console.log("Profession Page Rendering");
  }, [db, navigateTo, name, apiNavigation]);

  const makeRow = (recipe, firstColumn) => {
    /*
    "firstColumn" makes this reusable - ie, trainer recipes have the level needed for their first column,
    but renown recipes will have the rep & level, and specializations have specialization & level.
    */

    const recipeItem = apiNavigation.getItem().byId(recipe.itemId);
    const recipeMaterials = apiNavigation.getMaterials().byRecipeId(recipe.id);

    return (
      <tr key={`rc-row-${recipe.id}`}>
        <td>{firstColumn}</td>
        <td>
          {recipe.icon
            ? displayIconMedium(
                recipe.icon,
                qualityToImgClass(recipeItem.quality)
              )
            : "(ICON)"}{" "}
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </td>
        <td>{recipe.category}</td>
        <td>
          <ul>{makeMaterialTable(recipeMaterials)}</ul>
        </td>
      </tr>
    );
  };

  const makeMaterialTable = (materials) => {
    return materials.map((material) => {
      const item = apiNavigation.getItem().byId(material.itemId);
      return (
        <li key={`mt-${material.id}`} className="prof-list-item">
          {/* we basically want the data to look like this: 3x (icon) Chromatic Dust
                        first is quantity, then the icon, then the name */}
          {item.icon
            ? displayIconMedium(item.icon, qualityToImgClass(item.quality))
            : "(ICON)"}{" "}
          {material.quantity}x <Link to={`/items/${item.id}`}>{item.name}</Link>
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
          trainerRecipes={trainerRecipes.current}
          specializationRecipes={specializationRecipes.current}
          renownRecipes={renownRecipes.current}
          otherRecipes={otherRecipes.current}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfessionPage;
