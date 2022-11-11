import "./ProfessionDescription.css";
import { displayIconLarge, isObjectEmpty } from "../../Common";

const ProfessionDescription = (props) => {
  //props: professionName (basically, the name in the URL capitalized) profession

  return (
    <div className="Profession-Description">
      {props.profession && !isObjectEmpty(props.profession)
        ? displayIconLarge(
            `https://wow.zamimg.com/images/wow/icons/large/ui_profession_${props.profession.name.toLowerCase()}.jpg`,
            "img-centered"
          )
        : ""}
      <h1 className="header-xl">Dragonflight {props.professionName}</h1>
      <h3 className="header-med">Description</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3 className="header-med">Notable Crafts</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3 className="header-med">Tools & Accessories Used</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3 className="header-med">Finishing Reagents Used</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3 className="header-med">Benefits of Having {props.professionName}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default ProfessionDescription;
