import "./TempLoad.css";

const TempLoad = (props) => {
  return (
    <div className="Temp-Load">
      <h1 className="header-xl">
        Hi there! Just waiting for the DB to load! Give me a second!
      </h1>
      <h2 className="header-lrg">
        (this takes a while if nobody has been to the site in a little bit)
      </h2>
    </div>
  );
};

export default TempLoad;
