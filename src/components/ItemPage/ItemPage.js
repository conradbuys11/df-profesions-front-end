import { useState, useEffect } from "react";
import "./ItemPage.css";
import {
  websiteLooksLikeCrapNotice,
  isObjectEmpty,
  displayIconLarge,
  qualityToImgClass,
} from "../../Common";
import { useParams } from "react-router-dom";
import ItemPageCraftedBy from "./ItemPageCraftedBy";
import ItemPageGearInfo from "./ItemPageGearInfo";
import ItemPageReagentFor from "./ItemPageReagentFor";

const ItemPage = (props) => {
  /*
  alllllrighty so this is gonna be the most variable for now since i haven't actually seeded the info for most items yet
  but we're just gonna act like we have all the info we need. maybe conditional rendering, we will see.
  there's also gonna be a lot of copying from RecipePage during this first phase of getting the info loaded.

  
  */

  //props: URL
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    let fetching = true;
    fetch(`${props.URL}/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (fetching) {
          setItem(data);
        }
      });

    return () => {
      fetching = false;
    };
  }, [props.URL, id]);

  /* 
  info we need to show:
  icon, name. duh
  binds on
  description
  if stacksTo > 1, put that in
  maybe we can do some funky color stuff with item quality (Common, Uncommon, Rare, Epic)
  otherType (ie crafting reagent)
  if qualityLevels > 1, put that in
  if finishingReagentType, def put that in

  now if this is gear, a lot of info:
  armorWeaponType, slot, isUniqueEquipped
  itemLevel is an array, min being index 0, max being index length-1
  prmary stats is an array of arrays. first array is each primary (str, int, agi), second array is values of min through max
  secondary stats is an array of arrays. each array has the stat name as index 0, then the values as the remaining indexes.
  and my notes, as well

  what recipes make this, in an accordion

  what recipes use this as a material, in an accordion
  that info is gonna be funky to get - get materials that reference this item, then get the recipe that is referenced by that material.
  don't forget to say the quantity of this item in that recipe, as well
  */
  return isObjectEmpty(item) ? (
    <h1 className="header-xl">Loading...</h1>
  ) : (
    <div className="Item-Page">
      {websiteLooksLikeCrapNotice()}
      {item.icon ? (
        displayIconLarge(
          item.icon,
          `img-centered ${qualityToImgClass(item.quality)}`
        )
      ) : (
        <h5 className="temp-center">(ICON)</h5>
      )}
      <h1 className="header-xl">{item.name}</h1>
      {item.bindOn ? <p>{`Binds on ${item.bindOn}`}</p> : <></>}
      {item.stacksTo > 1 ? <p>Stacks to {item.stacksTo}</p> : <></>}
      {item.otherType ? <p>{item.otherType}</p> : <></>}
      {item.qualityLevels > 1 ? (
        <p>Possible Levels of Quality: {item.qualityLevels}</p>
      ) : (
        <></>
      )}
      {item.finishingReagentType ? (
        <p>"{item.finishingReagentType}" Finishing Reagent</p>
      ) : (
        <></>
      )}
      {item.description ? <p>{`"${item.description}"`}</p> : <></>}
      {item.notes ? (
        <p className="text-med-ital">(Conrad's notes: {item.notes})</p>
      ) : (
        <></>
      )}

      {/* gear stuff */}
      {item.slot || item.armorWeaponType ? (
        <ItemPageGearInfo item={item} />
      ) : item.onUse ? (
        <p>{item.onUse}</p>
      ) : (
        <></>
      )}

      {/* crafted by, stuff */}
      {item.recipes.length > 0 ? <ItemPageCraftedBy item={item} /> : <></>}

      {/* used as material for, stuff */}
      {item.materials.length > 0 ? <ItemPageReagentFor item={item} /> : <></>}
    </div>
  );
};

export default ItemPage;
