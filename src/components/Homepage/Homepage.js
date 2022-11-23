import { React } from "react";
// import { Link } from 'react-router-dom';
import HomepageWelcome from "./HomepageWelcome";
import HomepageWhereToStart from "./HomepageWhereToStart";
import "./Homepage.css";
import { websiteLooksLikeCrapNotice } from "../../Common";

const Homepage = (props) => {
  return (
    <div className="Homepage navbar-margin">
      {/* 
                BIG, BIG, BIG TO-DO
                I NEED BETTER IMAGES FOR BOTH HOMEPAGEWELCOME AND HOMEPAGEWHERETOSTART
                MORE SQUARE-LIKE: CURRENT IMAGES ARE VERY WIDE, BUT NOT TALL AT ALL
                */}
      <HomepageWelcome />
      <HomepageWhereToStart />
    </div>
  );
};

export default Homepage;
