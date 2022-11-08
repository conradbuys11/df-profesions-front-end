import { React } from "react";
import "./ItemPage.css";
import { websiteLooksLikeCrapNotice } from "../../Common";

const ItemPage = (props) => {
  /*
  alllllrighty so this is gonna be the most variable for now since i haven't actually seeded the info for most items yet
  but we're just gonna act like we have all the info we need. maybe conditional rendering, we will see.
  there's also gonna be a lot of copying from RecipePage during this first phase of getting the info loaded.
  */

  //props: URL
  return <div className="Item-Page">{websiteLooksLikeCrapNotice()}</div>;
};

export default ItemPage;
