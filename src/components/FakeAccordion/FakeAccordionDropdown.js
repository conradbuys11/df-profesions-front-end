import "./FakeAccordionDropdown.css";
import Dropdown from "react-bootstrap/esm/Dropdown";

const FakeAccordionDropdown = (props) => {
  // props: isSectionActive, headers, handleSectionClick, handleShowAll, handleHideAll, dropdownMenuName, showOnlyOne

  const makeDropdownItemsArray = () => {
    let arr = props.headers.map((header, index) => (
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
    ));
    if (!props.showOnlyOne) {
      arr.push(<Dropdown.Divider key={`f-accordion-dropdown-divider`} />);
      arr.push(
        <Dropdown.Item
          onClick={props.handleShowAll}
          key={`f-accordion-dropdown-show-all`}
        >
          Show All
        </Dropdown.Item>
      );
      arr.push(
        <Dropdown.Item
          onClick={props.handleHideAll}
          key={`f-accordion-dropdown-hide-all`}
        >
          Hide All
        </Dropdown.Item>
      );
    }
    return arr;
  };

  const makeDropdownItems = () => {
    return props.headers ? makeDropdownItemsArray() : <></>;
  };

  return (
    <div className="Fake-Accordion-Dropdown">
      <Dropdown autoClose={false}>
        <Dropdown.Toggle size="lg">{props.dropdownMenuName}</Dropdown.Toggle>
        <Dropdown.Menu>{makeDropdownItems()}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FakeAccordionDropdown;
