import "./FakeAccordion.css";
import { useState } from "react";
import FakeAccordionContainer from "./FakeAccordionContainer";
import FakeAccordionDropdown from "./FakeAccordionDropdown";
import FakeAccordionContent from "./FakeAccordionContent";

const FakeAccordion = (props) => {
  // props: sections (ie, number of sections), headers (ie, array of text of headers),
  // colSize (if you want to manually set how many columns for the container),
  // content (array of the stuff in each section. this is gonna be a lot of html)

  const setNumberOfSections = (number) => {
    let array = [];
    for (let i = 0; i < number; i++) {
      array.push(false);
    }
    return array;
  };

  const [isSectionActive, setSectionActive] = useState(
    props.sections ? setNumberOfSections(props.sections) : []
  );

  const handleSectionClick = (sectionId) => {
    const curSectionActive = isSectionActive[sectionId];
    // mapping through the array - if the section is the one we passed in, set it to the opposite. otherwise, return what was already there!
    setSectionActive(
      isSectionActive.map((section, index) =>
        index === sectionId ? !curSectionActive : section
      )
    );
  };

  const makeAccordionContent = () => {
    props.content ? (
      props.content.map((content, index) => (
        <FakeAccordionContent
          isSectionActive={isSectionActive[index]}
          key={`f-accordion-content-${index}`}
        >
          {content}
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
        handleSectionClick={handleSectionClick}
        headers={props.headers}
        colSize={props.colSize ? props.colSize : 4}
      />
      <FakeAccordionDropdown
        isSectionActive={isSectionActive}
        handleSectionClick={handleSectionClick}
        headers={props.headers}
      />
      <hr className="divider" />
      {makeAccordionContent()}
    </div>
  );
};

export default FakeAccordion;
