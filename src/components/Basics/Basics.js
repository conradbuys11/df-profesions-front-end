import { React } from "react";
import "./Basics.css";
import BasicsIntro from "./BasicsIntro";
import BasicsInfo from "./BasicsInfo";
import { websiteLooksLikeCrapNotice } from "../../Common";

const Basics = (props) => {
  return (
    <div className="Basics navbar-margin">
      {websiteLooksLikeCrapNotice()}
      <BasicsIntro />
      <BasicsInfo />
    </div>
  );
};

export default Basics;
