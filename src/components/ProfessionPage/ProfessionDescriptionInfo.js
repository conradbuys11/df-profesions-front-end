const switchHelper = (
  professionName,
  alchemyInfo,
  blacksmithingInfo,
  enchantingInfo,
  engineeringInfo,
  inscriptionInfo,
  jewelcraftingInfo,
  leatherworkingInfo,
  tailoringInfo,
  herbalismInfo,
  miningInfo,
  skinningInfo,
  cookingInfo,
  fishingInfo
) => {
  switch (professionName.toLowerCase()) {
    case "alchemy":
      return alchemyInfo;
    case "blacksmithing":
      return blacksmithingInfo;
    case "enchanting":
      return enchantingInfo;
    case "engineering":
      return engineeringInfo;
    case "inscription":
      return inscriptionInfo;
    case "jewelcrafting":
      return jewelcraftingInfo;
    case "leatherworking":
      return leatherworkingInfo;
    case "tailoring":
      return tailoringInfo;
    case "herbalism":
      return herbalismInfo;
    case "mining":
      return miningInfo;
    case "skinning":
      return skinningInfo;
    case "cooking":
      return cookingInfo;
    case "fishing":
      return fishingInfo;
    default:
      return "Error.";
  }
};

// TODO: Write descriptions for each profession.
// TODO: Write up tools & accessory gets for each profession.
// TODO: Write up finishing reagent gets for each profession.
const getDescription = (professionName) => {
  switchHelper(professionName);
};
const getToolsAndAccessories = (professionName) => {
  switchHelper(professionName);
};
const getFinishingReagents = (professionName) => {
  switchHelper(professionName);
};
