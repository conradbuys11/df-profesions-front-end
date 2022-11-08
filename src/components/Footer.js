import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="Footer">
      <span className="text-small-ital">
        Created by Conrad Buys with React, Express.js, & PostgreSQL :)
      </span>
      <br />
      <span className="text-small-ital">
        (big thanks to wowhead for the item & profession icons!)
      </span>
    </div>
  );
};

export default Footer;
