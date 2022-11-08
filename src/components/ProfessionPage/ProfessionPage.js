import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  capitalizeWord,
  largeIconToMedium,
  websiteLooksLikeCrapNotice,
} from "../../Common";
import SpecializationRecipes from "./SpecializationRecipes";
import TrainerRecipes from "./TrainerRecipes";
import RenownRecipes from "./RenownRecipes";
import OtherRecipes from "./OtherRecipes";
import "./ProfessionPage.css";
import Accordion from "react-bootstrap/Accordion";

/*
the info that professions have in the DB:
id, name, icon,
tools (item, has many), first_accessories (item, has many), recipes (has many), specializations (has many)

the info we're gonna need for displaying recipes:
recipe name, icon, required prof level, required renown & specialization level (incase that's part of that)
probably more stuff like materials but let's stick with the basics rn

will probably want to break this into multiple pages/components
ie a Trainer Recipes section/component, a Renown Recipes section/component, Specialization Recipes, PvP Recipes, Other Recipes
that way we can easily break up the sections & have space between them

do i also want to allow folks to sort/filter by certain criteria?
the answer is yes i just need to plan it out
ie only trainer recipes, only renown recipes, sort by category, etc.
*/

const ProfessionPage = (props) => {
  const { name } = useParams();
  // const URL = 'http://localhost:3001';
  const [profession, setProfession] = useState({});
  const [recipes, setRecipes] = useState([]);
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
      <tr>
        <td>{firstColumn}</td>
        <td>
          {recipe.item.icon ? (
            <img src={largeIconToMedium(recipe.item.icon)} alt="" />
          ) : (
            "(ICON)"
          )}{" "}
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
    let rows = [];
    try {
      materials.forEach((material) => {
        recipeKey += 1;
        rows.push(
          <li key={`mt-${recipeKey}`} className="prof-list-item">
            {/* we basically want the data to look like this: 3x (icon) Chromatic Dust
                        first is quantity, then the icon, then the name */}
            {material.item.icon ? (
              <img src={largeIconToMedium(material.item.icon)} alt="" />
            ) : (
              "(ICON)"
            )}{" "}
            {material.quantity}x {material.item.name}
          </li>
        );
      });
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  //temp function while we're not calling on DB
  const iconURL = `https://wow.zamimg.com/images/wow/icons/large/ui_profession_${name.toLowerCase()}.jpg`;

  return (
    <div className="Profession-Page">
      {websiteLooksLikeCrapNotice()}
      <img src={iconURL} alt={`${name} icon`} />
      <h1 className="header-xl">Dragonflight {capitalizeWord(name)}</h1>
      <br /> <br />
      <Accordion alwaysOpen="true" flush>
        <TrainerRecipes
          eventKey={0}
          profession={profession}
          URL={props.URL}
          makeRow={makeRow}
        />
        <SpecializationRecipes
          eventKey={1}
          profession={profession}
          URL={props.URL}
          makeRow={makeRow}
        />
        <RenownRecipes
          eventKey={2}
          profession={profession}
          URL={props.URL}
          makeRow={makeRow}
        />
        <OtherRecipes
          eventKey={3}
          profession={profession}
          URL={props.URL}
          makeRow={makeRow}
        />
      </Accordion>
    </div>
  );
};

export default ProfessionPage;
