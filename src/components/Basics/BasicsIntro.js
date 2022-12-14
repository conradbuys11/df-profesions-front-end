import React from "react";
import "./BasicsIntro.css";

const BasicsIntro = (props) => {
  return (
    <div id="Basics-Intro" className="basics-component">
      <h1 className="header-lrg">
        How have Professions changed in Dragonflight?
      </h1>
      <hr className="divider" />
      <ol>
        <li className="text-med">
          Most crafting recipes have a{" "}
          <span className="text-med-bold">Difficulty</span> level, and you can
          craft higher <span className="text-med-bold">Quality</span> items
          based on how much skill you have in that profession.
        </li>
        <li className="text-med">
          There are now <span className="text-med-bold">Stats</span> for
          professions. Each of them improve certain aspects of your crafting or
          gathering.
        </li>
        <li className="text-med">
          All professions now have{" "}
          <span className="text-med-bold">Equipment</span> - three different
          items that improve crafting or gathering by giving you different
          stats.
        </li>
        <li className="text-med">
          All professions (except Cooking & Fishing) have{" "}
          <span className="text-med-bold">Specializations</span>. These allow
          you to specialize yourself in certain aspects of your profession. You
          become more skilled in Specializations by allocating Profession{" "}
          <span className="text-med-bold">Knowledge</span> into them.
        </li>
        <li className="text-med">
          Many recipes have{" "}
          <span className="text-med-bold">Finishing Reagents</span> that can
          optionally be used to improve the craft in specific ways.
        </li>
      </ol>
      <p className="text-med">
        For more info on any of these aspects of professions, click on its
        section button below.
      </p>
    </div>
  );
};

export default BasicsIntro;
