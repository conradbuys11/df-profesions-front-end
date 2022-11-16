import "./HeaderSearchBar.css";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { convertToSearchTerm, displayIconMedium } from "../Common";
import { LinkContainer } from "react-router-bootstrap";

const HeaderSearchBar = (props) => {
  //props: db, apiNavigation
  const [text, setText] = useState("");
  const [searchItems, setSearchItems] = useState(true);
  const [searchRecipes, setSearchRecipes] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const executeSearch = () => {
    // might also need to

    // if we are currently set to search for items, map the items that have a similar name.
    // not using apinavigation because we need to change the item name into a search version
    const itemArray = searchItems
      ? props.db.items.filter((item) =>
          convertToSearchTerm(item.name).includes(convertToSearchTerm(text))
        )
      : [];

    // same with recipes, but we also want to see if the item of the recipe matches our search term
    const recipeArray = searchRecipes
      ? props.db.recipes.filter(
          (recipe) =>
            convertToSearchTerm(recipe.name).includes(
              convertToSearchTerm(text)
            ) ||
            convertToSearchTerm(
              props.apiNavigation.getItem().byId(recipe.itemId).name
            ).includes(convertToSearchTerm(text))
        )
      : [];

    // gonna return an object with both of the arrays
    return { items: itemArray, recipes: recipeArray };
  };

  const createDropdownItemList = () => {
    const rawSearch = executeSearch();
    const dropdownItemList = rawSearch.items
      .map((item) => createDropdownItem("Item", item))
      .concat(
        rawSearch.recipes.map((recipe) => createDropdownItem("Recipe", recipe))
      );
    return dropdownItemList.length > 0 ? (
      dropdownItemList
    ) : (
      <Dropdown.Item>No results found.</Dropdown.Item>
    );
  };

  const createDropdownItem = (type, object) => {
    // really need something in common to generate the icon
    return (
      <LinkContainer
        to={createDropdownLink(type, object)}
        key={`search-${type}-${object.id}`}
      >
        <Dropdown.Item onClick={clearSearch}>
          {object.icon ? displayIconMedium(object.icon) : "ICON"} {object.name}{" "}
          ({type})
        </Dropdown.Item>
      </LinkContainer>
    );
  };

  const createDropdownLink = (type, object) => {
    let link = type === "Item" ? "/items/" : "Recipe" ? "/recipes/" : "/";
    return link + object.id;
  };

  const clearSearch = (e) => {
    setText("");
  };

  return (
    <div className="Header-Search-Bar">
      <input placeholder="Search (WIP)" value={text} onChange={handleChange} />
      <Dropdown.Menu show={text.length > 2}>
        {text.length > 2 ? createDropdownItemList() : "asdf"}
      </Dropdown.Menu>
    </div>
  );
};

export default HeaderSearchBar;
