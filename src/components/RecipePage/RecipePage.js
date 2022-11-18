import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { websiteLooksLikeCrapNotice, isObjectEmpty } from "../../Common";
import "./RecipePage.css";
import RecipeBanner from "./RecipeBanner";
import RecipeDescription from "./RecipeDescription";
import RecipeMaterials from "./RecipeMaterials";
import RecipeFinishingReagents from "./RecipeFinishingReagents";

const RecipePage = (props) => {
  // props: URL

  // TODO: split this into components, there's way too much stuff in here

  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigateTo = useNavigate();
  const [db, apiNavigation] = useOutletContext();
  const item = useRef({});
  const materials = useRef({});
  const finishingReagents = useRef({});
  const profession = useRef({});

  // useEffect(() => {
  //   let fetching = true;
  //   fetch(`${props.URL}/recipes/${id}`)
  //     .then((res) => checkFetchError(res))
  //     .then((data) => {
  //       if (fetching) {
  //         setRecipe(data);
  //       }
  //     })
  //     .catch((e) => navigateTo("/oops"));

  //   return () => {
  //     fetching = false;
  //   };
  // }, [props.URL, id, navigateTo]);

  useEffect(() => {
    if (db) {
      if (!isObjectEmpty(db)) {
        try {
          const rec = apiNavigation.getRecipe().byId(id);
          setRecipe(rec);
          item.current = apiNavigation.getItem().byId(rec.itemId);
          materials.current = apiNavigation.getMaterials().byRecipeId(rec.id);
          finishingReagents.current = apiNavigation
            .getFinishingReagents()
            .byRecipeId(rec.id);
          profession.current = apiNavigation
            .getProfession()
            .byId(rec.professionId);
        } catch (e) {
          console.log(`Hey here's your error: ${e}`);
        }
      }
    } else {
      navigateTo("/oops");
    }
  }, [apiNavigation, db, id, navigateTo]);

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
      <h1 className="header-xl navbar-margin">Loading...</h1>
    ) : (
      <div className="Recipe-Page navbar-margin">
        {websiteLooksLikeCrapNotice()}
        <RecipeBanner recipe={recipe} item={item.current} />
        <div className="recipe-component">
          <RecipeDescription
            recipe={recipe}
            profession={profession.current}
            item={item.current}
          />
          <RecipeMaterials
            recipe={recipe}
            materials={materials.current}
            apiNavigation={apiNavigation}
          />
          {isObjectEmpty(finishingReagents.current) ? (
            <></>
          ) : (
            <RecipeFinishingReagents
              recipe={recipe}
              finishingReagents={finishingReagents.current}
              apiNavigation={apiNavigation}
            />
          )}
        </div>
      </div>
    )
  );
};

export default RecipePage;
