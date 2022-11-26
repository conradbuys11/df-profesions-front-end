import "./FakeAccordion.css";
import { useState } from "react";
import FakeAccordionContainer from "./FakeAccordionContainer";
import FakeAccordionDropdown from "./FakeAccordionDropdown";
import FakeAccordionContent from "./FakeAccordionContent";
import Fade from "react-bootstrap/esm/Fade";

const FakeAccordion = (props) => {
  // PROPS:
  // sections (ie, number of sections), headers (ie, array of text of headers),
  // colSize (if you want to manually set how many columns for the container),
  // content (array of the stuff in each section. this is gonna be a lot of html)
  // divider (bool, puts a divider at the end of each content. true by default)
  // dropdownMenuName (string, what the dropdown menu should have as text for the button. defaults to "Sections to Show")
  // showOnlyOne (bool, will only allow one thing to be showing at a time if true, also removes show/hide all buttons. defaults to false.)
  // defaultOpen (int, if a section should be open by default. defaults to null)

  const setNumberOfSections = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) {
      if (i === props.defaultOpen) {
        array.push(true);
      } else {
        array.push(false);
      }
    }
    return array;
  };

  const [isSectionActive, setSectionActive] = useState(
    props.sections ? setNumberOfSections(props.sections) : []
  );

  const showOnlyOne = props.showOnlyOne ? props.showOnlyOne : false;

  // const areAllSectionsActive = () => {
  //   return isSectionActive.every((section) => section === true);
  // };

  // const areAllSectionsInactive = () => {
  //   return isSectionActive.every((section) => section === false);
  // };

  const handleSectionClick = (sectionId) => {
    const curSectionActive = isSectionActive[sectionId];
    // mapping through the array - if the section is the one we passed in, set it to the opposite. otherwise, return what was already there!
    setSectionActive(
      isSectionActive.map((section, index) =>
        index === sectionId ? !curSectionActive : section
      )
    );
  };

  const handleSectionClickOnlyOne = (sectionId) => {
    setSectionActive(
      isSectionActive.map((section, index) =>
        index === sectionId ? true : false
      )
    );
  };

  // const handleToggleAll = () => {
  //   setSectionActive(
  //     isSectionActive.map((section) => (areAllSectionsActive() ? false : true))
  //   );
  // };

  const handleShowAll = () => {
    if (!isSectionActive.every((section) => section === true)) {
      setSectionActive(isSectionActive.map((section) => true));
    }
  };

  const handleHideAll = () => {
    if (!isSectionActive.every((section) => section === false)) {
      setSectionActive(isSectionActive.map((section) => false));
    }
  };

  const makeAccordionContent = () => {
    return props.content ? (
      props.content.map((content, index) => (
        <FakeAccordionContent
          isSectionActive={isSectionActive[index]}
          key={`f-accordion-content-${index}`}
        >
          {content}
          {/* if either divider is not provided, or it is true. ie, only time we're not putting in divider is when false */}
          {props.divider === undefined || props.divider ? (
            <hr className="divider" />
          ) : (
            <></>
          )}
        </FakeAccordionContent>
      ))
    ) : (
      <></>
    );
  };

  return (
    <div>
      <FakeAccordionContainer
        isSectionActive={isSectionActive}
        handleSectionClick={
          showOnlyOne ? handleSectionClickOnlyOne : handleSectionClick
        }
        headers={props.headers}
        colSize={props.colSize ? props.colSize : 4}
        // areAllSectionsActive={areAllSectionsActive}
        // areAllSectionsInactive={areAllSectionsInactive}
        handleShowAll={handleShowAll}
        handleHideAll={handleHideAll}
        showOnlyOne={showOnlyOne}
      />
      <FakeAccordionDropdown
        isSectionActive={isSectionActive}
        handleSectionClick={
          showOnlyOne ? handleSectionClickOnlyOne : handleSectionClick
        }
        headers={props.headers}
        // areAllSectionsActive={areAllSectionsActive}
        // areAllSectionsInactive={areAllSectionsInactive}
        handleShowAll={handleShowAll}
        handleHideAll={handleHideAll}
        showOnlyOne={showOnlyOne}
        dropdownMenuName={
          props.dropdownMenuName ? props.dropdownMenuName : "Sections to Show"
        }
      />
      <hr className="divider" />
      {makeAccordionContent()}
    </div>
  );
};

export default FakeAccordion;
