import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./FinishingReagentsPage.css";
import { isObjectEmpty, websiteLooksLikeCrapNotice } from "../../Common";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FReagentTypeInfo from "./FReagentTypeInfo";
import FrTypeTable from "./FrTypeTable";
import FrProfessionSection from "./FrProfessionSection";
import FakeAccordion from "../FakeAccordion/FakeAccordion";

const FinishingReagentsPage = (props) => {
  const [db, apiNavigation] = useOutletContext();
  const [finishingReagents, setFinishingReagents] = useState({});
  const [activeProfession, setActiveProfession] = useState(null);
  const finishingReagentTypes = useRef([]);
  const navigateTo = useNavigate();
  const fReagentTypeInfo = FReagentTypeInfo();

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

  const handleClick = (e) => {
    setActiveProfession(e.target.innerText);
  };

  const makeFrProfessionSections = (professions) => {
    return professions.map((profession, index) => (
      <FrProfessionSection
        key={`fr-prof-section-${index}`}
        professionName={profession}
      />
    ));
  };

  return (
    <div className="Finishing-Reagents-Page navbar-margin">
      {isObjectEmpty(finishingReagents) ? (
        <p>Loading...</p>
      ) : (
        <div className="text-med">
          <h2 className="header-xl">Finishing Reagent Types</h2>
          <h2 className="header-lrg hide-md">Used By:</h2>
          <FakeAccordion
            sections={10}
            headers={fReagentTypeInfo.professions}
            colSize={3}
            content={makeFrProfessionSections(fReagentTypeInfo.professions)}
            dropdownMenuName={"Used By:"}
            showOnlyOne={true}
            defaultOpen={0}
          />
          <br />
          {activeProfession ? (
            <FrProfessionSection professionName={activeProfession} />
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default FinishingReagentsPage;
