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
          key={`table-${index}`}
          useName={true}
          type={type}
          frKey={`type-${index}`}
        />
      ))
    ) : (
      <p>There are no Finishing Reagents for {props.professionName}!</p>
    );
  };

  return (
    <div className="FrProfessionSection">
      <h2 className="header-med">{props.professionName}</h2>
      {makeFrTypeInfo(props.professionName)}
    </div>
  );
};

export default FrProfessionSection;
