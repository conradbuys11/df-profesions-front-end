import FReagentTypeInfo from "./FReagentTypeInfo";
import "./FrProfessionSection.css";
import FrTypeTable from "./FrTypeTable";

const FrProfessionSection = (props) => {
  // props: professionName

  const fReagentTypeInfo = FReagentTypeInfo();

  const makeFrTypeInfo = (professionName) => {
    const types = fReagentTypeInfo.types.filter(
      (type) => type.professionUsedFor === professionName
    );
    return types.length > 0 ? (
      types.map((type, index) => (
        <FrTypeTable
          sectionName={index % 2 === 0 ? "even-section" : "odd-section"}
          key={`table-${index}`}
          useName={true}
          type={type}
          frKey={`type-${index}`}
        />
      ))
    ) : (
      <h2 className="text-med" style={{ paddingBottom: "1rem" }}>
        There are no Finishing Reagents for {props.professionName}!
      </h2>
    );
  };

  return (
    <div className="FrProfessionSection">
      <h2 className="header-lrg">{props.professionName}</h2>
      {makeFrTypeInfo(props.professionName)}
    </div>
  );
};

export default FrProfessionSection;
