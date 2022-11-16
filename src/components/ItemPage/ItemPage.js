import { useState, useEffect, useRef } from "react";
import "./ItemPage.css";
import {
  websiteLooksLikeCrapNotice,
  isObjectEmpty,
  displayIconLarge,
  qualityToImgClass,
  fReagentTypeToUrl,
} from "../../Common";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
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
  const navigateTo = useNavigate();
  const [db, apiNavigation] = useOutletContext();
  const craftedBy = useRef([]);
  const usedFor = useRef([]);

  // useEffect(() => {
  //   let fetching = true;
  //   fetch(`${props.URL}/items/${id}`)
  //     .then((res) => checkFetchError(res))
  //     .then((data) => {
  //       if (fetching) {
  //         setItem(data);
  //       }
  //     })
  //     .catch((e) => navigateTo("/oops"));

  //   return () => {
  //     fetching = false;
  //   };
  // }, [props.URL, id, navigateTo]);

  useEffect(() => {
    if (db) {
      if (!isObjectEmpty(db)) {
        try {
          const i = apiNavigation.getItem().byId(id);
          setItem(i);
          craftedBy.current = apiNavigation.getRecipes().byItem(i.id);
          usedFor.current = apiNavigation.getMaterials().byItemId(i.id);
        } catch (e) {
          console.log(`Hey here's your error: ${e}`);
        }
      }
    } else {
      navigateTo("/oops");
    }
  }, [apiNavigation, db, id, navigateTo]);

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

  const processFinishingReagentTypes = () => {
    if (item.finishingReagentType.length === 1) {
      return (
        <Link
          to={`/items/finishingreagents/${fReagentTypeToUrl(
            item.finishingReagentType[0]
          )}`}
        >
          {item.finishingReagentType[0]}
        </Link>
      );
    } else {
      return item.finishingReagentType.map((type, index, array) => {
        let elementsLeftToIterateOn = array.length - 1 - index;
        return (
          <span key={`fr-type-${index}`}>
            <Link to={`/items/finishingreagents/${fReagentTypeToUrl(type)}`}>
              {type}
            </Link>
            {
              // if we're not the second to last or last index of the array, add a comma and a space
              // (ie ... text, ...)
              elementsLeftToIterateOn >= 2
                ? ", "
                : // if we're the second to last element of the array
                // ie (... text & ...)
                elementsLeftToIterateOn === 1
                ? " & "
                : //if we're the last element of the array, cool, stop there
                  ""
            }
          </span>
        );
      });
    }
  };

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
        <p>Finishing Reagent Type(s): {processFinishingReagentTypes()}</p>
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
      {craftedBy.current.length > 0 ? (
        <ItemPageCraftedBy
          craftedBy={craftedBy.current}
          apiNavigation={apiNavigation}
        />
      ) : (
        <></>
      )}

      {/* used as material for, stuff */}
      {usedFor.current.length > 0 ? (
        <ItemPageReagentFor reagentFor={usedFor.current} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemPage;
