import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./FinishingReagentsPage.css";
import { isObjectEmpty } from "../../Common";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FReagentTypeInfo from "./FReagentTypeInfo";
import FrTypeTable from "./FrTypeTable";
import FrProfessionSection from "./FrProfessionSection";

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

  // const listFrTypes = (types) => {
  //   return types.map((type, i) => (
  //     <Col
  //       lg="3"
  //       md="4"
  //       sm="6"
  //       xs="12"
  //       className="freagent-col"
  //       key={`type-${i}`}
  //     >
  //       {type}
  //     </Col>
  //   ));
  // };

  const handleClick = (e) => {
    setActiveProfession(e.target.innerText);
  };

  const listFrProfessions = (professions) => {
    return professions.map((profession, i) => (
      <Col
        lg="3"
        md="4"
        sm="6"
        xs="12"
        className="freagent-col"
        key={`profession-expand-${i}`}
      >
        <span onClick={handleClick}>{profession}</span>
      </Col>
    ));
  };

  // const makeFrTypeTable = (frType) => {};

  return (
    <div className="Finishing-Reagents-Page navbar-margin">
      {isObjectEmpty(finishingReagents) ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="header-lrg">
            Finishing Reagent Types, per Profession
          </h2>
          <Container>
            {/* <Row>{listFrTypes(finishingReagentTypes.current)}</Row> */}
            <Row>{listFrProfessions(fReagentTypeInfo.professions)}</Row>
          </Container>
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
