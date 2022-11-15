import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./FinishingReagentsPage.css";
import { isObjectEmpty } from "../../Common";

const FinishingReagentsPage = (props) => {
  const [db, apiNavigation] = useOutletContext();
  const [finishingReagents, setFinishingReagents] = useState({});
  const finishingReagentTypes = useRef([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    // if the db object is null, that means we failed, and we should navigate to /oops
    if (db) {
      // default for the db object is {}. so we need to wait for it to be actually populated before we start setting stuff.
      // we just don't do anything if db is an empty object
      if (!isObjectEmpty(db)) {
        try {
          const fReagents = apiNavigation.getItems().finishingReagents().all();
          setFinishingReagents(fReagents);

          // each item in fReagents has at least one finishing reagent type, in an array
          // so we're going map all of the arrays together, then flatten it to get rid of the sub-arrays
          let fReagentTypes = fReagents
            .map((fReagent) => fReagent.finishingReagentType)
            .flat();
          // sets cannot have duplicates, so this handy helper makes an array of the set of our stuff
          const fReagentTypesSet = [...new Set(fReagentTypes)];
          finishingReagentTypes.current = fReagentTypesSet;
        } catch (e) {
          console.log("Hey here's your error: " + e);
        }
      }
    } else {
      navigateTo("/oops");
    }
  }, [apiNavigation, db, navigateTo]);

  return <div>HELLO</div>;
};

export default FinishingReagentsPage;
