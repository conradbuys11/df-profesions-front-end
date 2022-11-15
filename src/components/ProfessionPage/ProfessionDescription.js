import "./ProfessionDescription.css";
import { displayIconLarge, isObjectEmpty } from "../../Common";
// import {
//   getDescription,
//   getNotableCrafts,
//   getFinishingReagents,
//   getBenefits,
//   getToolsAndAccessories,
// } from "./ProfessionDescriptionInfo";
import ProfessionDescriptionInfo from "./ProfessionDescriptionInfo";

const ProfessionDescription = (props) => {
  //props: professionName (basically, the name in the URL capitalized) profession
  const professionDescriptionInfo = ProfessionDescriptionInfo();

  return (
    <div className="Profession-Description">
      {props.profession && !isObjectEmpty(props.profession)
        ? displayIconLarge(
            `https://wow.zamimg.com/images/wow/icons/large/ui_profession_${props.professionName.toLowerCase()}.jpg`,
            "img-centered"
          )
        : ""}
      <h1 className="header-xl">Dragonflight {props.professionName}</h1>
      <h3 className="header-med">Description</h3>
      <p>{professionDescriptionInfo.getDescription(props.professionName)}</p>
      <h3 className="header-med">Notable Crafts</h3>
      {professionDescriptionInfo.getNotableCrafts(props.professionName)}
      <h3 className="header-med">Tools & Accessories Used</h3>
      {professionDescriptionInfo.getToolsAndAccessories(props.professionName)}
      <h3 className="header-med">Finishing Reagents Used</h3>
      {professionDescriptionInfo.getFinishingReagents(props.professionName)}
      <h3 className="header-med">Benefits of Having {props.professionName}</h3>
      {professionDescriptionInfo.getBenefits(props.professionName)}
      <h3 className="header-med">
        <a
          href={`https://wowhead.com/profession-tree-calc/${props.professionName.toLowerCase()}`}
        >
          Wowhead Profession Tree Calculator
        </a>
      </h3>
    </div>
  );
};

export default ProfessionDescription;
