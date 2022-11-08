import "./ItemPageGearInfo.css";
import { statRangeText } from "../../Common";

const ItemPageGearInfo = (props) => {
  const item = props.item;

  // if this is an armor piece for fighting, we want armorWeaponType to come before slot
  // ie, Cloth Chest
  // otherwise, slot comes before armorWeaponType
  // ie, One Handed Axe
  // don't forget, offhands do not have a type. if we don't have a armorWeaponType, just print the slot
  const firstLine = item.armorWeaponType
    ? item.armorWeaponType.matches(/(Cloth)|(Leather)|(Mail)|(Plate)/g)
      ? `${item.armorWeaponType} ${item.slot}`
      : `${item.slot} ${item.armorWeaponType}`
    : item.slot;

  const itemLevelLine = `Item Level ${statRangeText(item.itemLevel)}`;

  // since primaryStats is an array that looks like this: [["Agility", "Intellect"], [300, 301, 302, 303, 304]]
  // we want to take the second sub-array and format it, then put the stat names (formatted) after
  // ie, 300/301/302/303/304 Agility/Intellect
  const mainStatLine = item.primaryStats
    ? `${statRangeText(item.primaryStats[1])} ${statRangeText(
        item.primaryStats[0]
      )}`
    : null;

  const secondaryStatLines = () => {
    // do a similar thing for each secondary stat - need to make an array of strings, since we have multiple secondary stats
    let secondaryStatLines = [];
    if (item.secondaryStats) {
      item.secondaryStats.forEach((secondary) => {
        // basically same thing as mainStatLine, but secondaries are set up a little differently
        // the array looks like this: [["Haste", 300, 301, 302, 303, 304], [etc.]]
        // so we need to format everything except the first index, then put the stat name (first index) after
        // ie, 300/301/302/303/304 Haste
        secondaryStatLines.push(
          `${statRangeText(secondary.slice(1))} ${secondary[0]}`
        );
      });
    }

    return secondaryStatLines;
  };

  const equipText = item.otherInfo.effect ? item.otherInfo.effect : null;
  const onUseText = item.otherInfo.onUse
    ? `Use: ${item.otherInfo.onUse}`
    : null;

  let secondaryStatLineKey = 0;

  /* 
    finished example looks like this:
    Plate Legs, Item Level 333/335/337/340/343
    
    100/104/107/110/113 Strength/Intellect
    200/204/207/210/223 Stamina
    80/81/82/83/84 Secondary Stat 1
    80/81/82/83/84 Secondary Stat 2
    
    Equip: insert equip effect here
    On Use: insert on use effect here. 3 minute cooldown.
    */

  return (
    <div>
      <h2>Gear Stats:</h2>
      <p>
        {firstLine}, {itemLevelLine}
      </p>
      <br />
      <p>{mainStatLine}</p>
      {secondaryStatLines.map((line) => {
        secondaryStatLineKey += 1;
        return <p key={`sec-stat-${secondaryStatLineKey}`}>{line}</p>;
      })}
      <br />
      {equipText ? <p>{equipText}</p> : <></>}
      {onUseText ? <p>{onUseText}</p> : <></>}
    </div>
  );
};

export default ItemPageGearInfo;
