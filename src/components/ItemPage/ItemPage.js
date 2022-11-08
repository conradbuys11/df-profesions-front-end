import { React } from "react";
import "./ItemPage.css";
import { websiteLooksLikeCrapNotice } from "../../Common";

const ItemPage = (props) => {
  return <div className="Item-Page">{websiteLooksLikeCrapNotice()}</div>;
};

export default ItemPage;
