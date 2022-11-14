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
  const navigateTo = useNavigate();
  const apiNavigation = ApiNavigation(db);

  useEffect(() => {
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
    console.log(`Profession Page Rendering.`);
  }, [db, navigateTo, name, apiNavigation]);

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
          URL={props.URL}
          trainerRecipes={trainerRecipes.current}
          specializationRecipes={specializationRecipes.current}
          renownRecipes={renownRecipes.current}
          otherRecipes={otherRecipes.current}
          apiNavigation={apiNavigation}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfessionPage;
