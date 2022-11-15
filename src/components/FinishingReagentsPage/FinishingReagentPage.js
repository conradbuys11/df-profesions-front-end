import "./FinishingReagentPage.css";
import { useParams } from "react-router-dom";
import { fReagentUrlToType } from "../../Common";
import FrTypeTable from "./FrTypeTable";
import FReagentTypeInfo from "./FReagentTypeInfo";

const FinishingReagentPage = (props) => {
  const { name } = useParams();
  const type = () =>
    FReagentTypeInfo().types.find(
      (type) => type.name === fReagentUrlToType(name)
    );

  return (
    <div className="Finishing-Reagent-Page">
      <h2 className="header-lrg">{fReagentUrlToType(name)}</h2>
      <FrTypeTable type={type()} />
    </div>
  );
};

export default FinishingReagentPage;
