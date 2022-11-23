import "./FakeAccordionDropdown.css";
import Dropdown from "react-bootstrap/esm/Dropdown";

const FakeAccordionDropdown = (props) => {
  // props: isSectionActive, headers, handleSectionClick

  const makeDropdownItems = () => {
    props.headers ? (
      props.headers.map((header, index) => (
        <Dropdown.Item
          className={
            props.isSectionActive[index]
              ? "f-accordion-dropdown-item-active"
              : "f-accordion-dropdown-item"
          }
          onClick={() => props.handleSectionClick(index)}
          key={`f-accordion-dropdown-item-${index}`}
        >
          {header}
        </Dropdown.Item>
      ))
    ) : (
      <></>
    );
  };

  return (
    <div className="Fake-Accordion-Dropdown">
      <Dropdown autoClose={false}>
        <Dropdown.Toggle size="lg">Sections to Show</Dropdown.Toggle>
        <Dropdown.Menu>{makeDropdownItems()}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FakeAccordionDropdown;
