import "./RecipeFinishingReagents.css";
import { keyToWords } from "../../Common";

const RecipeFinishingReagents = (props) => {
  //props: finishingReagents

  const makeFinishingReagentList = (fReagents) => {
    let rows = [];
    try {
      fReagents.forEach((fReagent) => {
        rows.push(
          <li key={`fr-${fReagent.id}`} className="prof-list-item">
            {/* if we have any finishing reagents, we use our gross helper method to convert the key/value pair to words 
                                otherwise, we completely ignore putting data in 
                                might want to put the check BEFORE the push? */}
            {fReagent.reagentType}
            {Object.keys(fReagent.requiredSpecializationLevel).length > 0
              ? ` (via ${fReagentSpecLevelToWords(
                  fReagent.requiredSpecializationLevel
                )})`
              : ""}
          </li>
        );
      });
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  const fReagentSpecLevelToWords = (obj) => {
    let length = Object.keys(obj).length;
    let text = "";
    if (length === 1) {
      return keyToWords(Object.keys(obj)[0]);
    } else if (length > 1) {
      for (let i = 0; i < length; i++) {
        let rawName = Object.keys(obj)[i];
        let keyName = keyToWords(rawName);
        //valueNum is a really disgusting way of saying, get value of the key at position i
        let valueNum = Object.getOwnPropertyDescriptor(obj, rawName).value;

        //if this is the last specialization/level, hit em with the "or this"
        if (i + 1 === length) {
          text += `or ${keyName} ${valueNum}`;
        } else {
          text += `${keyName} ${valueNum}, `;
        }
        //example might be "Burning 10, Wafting 10, or Sophic 10"
      }
      return text;
    }
  };

  return (
    <div>
      <h3>Finishing Reagents:</h3>
      <ul>{makeFinishingReagentList(props.finishingReagents)}</ul>
    </div>
  );
};

export default RecipeFinishingReagents;
