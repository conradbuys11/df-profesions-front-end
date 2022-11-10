import "./ProfessionDescription.css";
import { displayIconLarge, capitalizeWord, isObjectEmpty } from "../../Common";

const ProfessionDescription = (props) => {
  //props: profession

  return (
    <div className="Profession-Description">
      {isObjectEmpty(props.profession)
        ? ""
        : displayIconLarge(
            `https://wow.zamimg.com/images/wow/icons/large/ui_profession_${props.profession.name.toLowerCase()}.jpg`,
            "img-centered"
          )}
      <h1 className="header-xl">
        Dragonflight{" "}
        {isObjectEmpty(props.profession)
          ? "Profession"
          : capitalizeWord(props.profession.name)}
      </h1>
      <h3 className="header-med">Description</h3>
      <p>Insert description here.</p>
      <h3 className="header-med">Notable Crafts</h3>
      <p>Insert notable crafts made by this profession here.</p>
      <h3 className="header-med">Tools & Accessories Used</h3>
      <p>Insert tools and accessories used by this profession here.</p>
      <h3 className="header-med">Finishing Reagents Used</h3>
      <p>Insert finishing reagents used by this profession here.</p>
      <h3 className="header-med">
        Benefits of Having{" "}
        {isObjectEmpty(props.profession)
          ? "This Profession"
          : props.profession.name}
      </h3>
      <p>
        Insert items that can only be used by this profession here. (I.e.
        Goggles can only be worn by Engineers.)
      </p>
    </div>
  );
};

export default ProfessionDescription;
