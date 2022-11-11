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

const createList = (arrayOfLi, professionName) => {
  return (
    <ul>
      {arrayOfLi.map((li, index) => (
        <li key={`${professionName.slice(0, 3)}-${index}`}>{li}</li>
      ))}
    </ul>
  );
};

// TODO: Write descriptions for each profession.
// TODO: Write up tools & accessory gets for each profession.
// TODO: Write up finishing reagent gets for each profession.
const getDescription = (professionName) => {
  return switchHelper(
    professionName,
    "TODO: ALCHEMY",
    "TODO: BLACKSMITHING",
    "TODO: ENCHANTING",
    // engineering
    "Engineers are the kings of gizmos and gadgets. Explosives, goggles with funky effects, guns, and quality of life toys are your bread and butter. Just make sure they don't backfire!",
    "TODO: INSCRIPTION",
    "TODO: JEWELCRAFTING",
    "TODO: LEATHERWORKING",
    //tailoring
    "Tailors are your crafters of Cloth gear & Backpieces. They can also make bags, and Intellect-based leg enchants called Spellthreads.",
    "TODO: HERBALISM",
    "TODO: MINING",
    "TODO: SKINNING",
    "TODO: COOKING",
    "TODO: FISHING"
  );
};
const getNotableCrafts = (professionName) => {
  return switchHelper(
    professionName,
    "TODO: ALCHEMY",
    "TODO: BLACKSMITHING",
    "TODO: ENCHANTING",
    // engineering
    createList(
      [
        "WIPE PROTECTION BOT: The S.A.V.I.O.R. can be placed before a wipe to rez the entire raid.",
        "HEAD & BRACERS W/ TINKER SOCKETS: Tinkers are like gems, but with an on use effect instead of stats. Could be very strong! But can also backfire on use!",
        "PROFESSION EQUIPMENT: Engineers craft Tools for Engineers, Fishers, Jewelcrafters, & Tailors, and Head Accessories for Engineers & Miners.",
        "EXPLOSIVES: Engineers get a variety of bombs wiith different effects. The EZ-Thro variety of each bomb can even be used by non-Engineers!",
        "HUNTER GUNS, SCOPES, & AMMO: Engineers craft guns for Hunters, as well as ranged weapon enchantments (scopes), as well as a new 'Ammo' consumable for hunters. Ammo is a 60min consumable for a ranged weapon, giving a small buff to your shots.",
      ],
      professionName
    ),
    "TODO: INSCRIPTION",
    "TODO: JEWELCRAFTING",
    "TODO: LEATHERWORKING",
    //tailoring
    createList(
      [
        "CLOTH GEAR & BACKPIECES: All 8 cloth armor slots, as well as Backs, are available to craft. PvP versions too! There are also some pre-Embellished gear sets using Azureweave & Chronocloth that might be good.",
        "BANNERS: Tailors can craft Banner items for Miners & Herbalists, allowing them to deal increased damaged to elementals & gain stats when gathering near them.",
        "PROFESSION EQUIPMENT: Tailors craft Chest Accessories for Tailors & Alchemists, and Head Accessories for Cooks, Enchanters, Fishers, & Herbalists.",
        "INTELLECT LEG ENCHANTS: Spellthreads are leg enchants with Intellect on them. Needed for every caster & healer!",
        "POLISHING CLOTH: Jewelcrafter's specific Finishing Reagent is Polishing Cloth, which are made by Tailors!",
      ],
      professionName
    ),
    "TODO: HERBALISM",
    "TODO: MINING",
    "TODO: SKINNING",
    "TODO: COOKING",
    "TODO: FISHING"
  );
};
const getToolsAndAccessories = (professionName) => {
  return switchHelper(
    professionName,
    "TODO: ALCHEMY",
    "TODO: BLACKSMITHING",
    "TODO: ENCHANTING",
    //engineering
    createList(
      [
        "TOOL: Made by Engineers. Khaz'gorite Encased Samophlange (higher ilvl, BoP) or Draconium Encased Samophlange (lower ilvl, BoE.)",
        "HEAD ACCESSORY: Made by Engineers. Khaz'gorite Brainwave Amplifier (higher ilvl, BoP) or Draconium Brainwave Amplifier (lower ilvl, BoE)",
        "HAND ACCESSORY: Made by Jewelcrafters. Shockproof Gloves (higher ilvl, BoP) or Protective Gloves (lower ilvl, BoE.)",
      ],
      professionName
    ),
    "TODO: INSCRIPTION",
    "TODO: JEWELCRAFTING",
    "TODO: LEATHERWORKING",
    //tailoring
    createList(
      [
        "TOOL: Made by Engineers. Spring-Loaded Khaz'gorite Fabric Cutters (higher ilvl, BoP) or Spring-Loaded Draconium Fabric Cutters (lower ilvl, BoE.)",
        "CHEST ACCESSORY: Made by Tailors. Dragoncloth Tailoring Vestments (VERY high ilvl, BoP) or Wildercloth Tailor's Coat (lower ilvl, BoE.)",
        "TOOLKIT ACCESSORY: Made by Blacksmiths. Khaz'gorite Needle Set (higher ilvl, BoP) or Draconium Needle Set (lower ilvl, BoE.)",
      ],
      professionName
    ),
    "TODO: HERBALISM",
    "TODO: MINING",
    "TODO: SKINNING",
    "TODO: COOKING",
    "TODO: FISHING"
  );
};
const getFinishingReagents = (professionName) => {
  return switchHelper(
    professionName,
    "TODO: ALCHEMY",
    "TODO: BLACKSMITHING",
    "TODO: ENCHANTING",
    //engineering
    createList(
      [
        "SPARE PARTS: Made by Engineers. Includes Overcharged Overclocker & Haphazardly Tethered Wires.",
        "SAFETY COMPONENTS: Made by Engineers. Can be used on a piece of gear with a Tinker socket. Affects the chances or effects of a Tinker malfunction.",
        "COGWHEELS: Made by Engineers. Can be used on a piece of Engineering gear to guarantee a secondary stat. Basically a missive for Goggles or Bracers.",
      ],
      professionName
    ),
    "TODO: INSCRIPTION",
    "TODO: JEWELCRAFTING",
    "TODO: LEATHERWORKING",
    //tailoring
    createList(
      [
        "EMBROIDERY THREAD: Made by Tailors. Includes Chromatic, Shimmering, & Blazing Embroidery Thread.",
      ],
      professionName
    ),
    "TODO: HERBALISM",
    "TODO: MINING",
    "TODO: SKINNING",
    "TODO: COOKING",
    "TODO: FISHING"
  );
};
const getBenefits = (professionName) => {
  return switchHelper(
    professionName,
    "TODO: ALCHEMY",
    "TODO: BLACKSMITHING",
    "TODO: ENCHANTING",
    //engineering
    createList(
      [
        "GOGGLES W/ TINKER SOCKET: While the bracers Engineers can craft are universal, you can only wear the goggles if you have Engineering 1.",
        "WYRMHOLE GENERATOR: A nice toy to zip you around the Dragon Isles on a 1-2 Hour CD. Can only be used by Engineers.",
        "S.A.V.I.O.R. & EXPLOSIVES: The wipe protection bot can only be used by Engineers, and the non-EZ-Thro version of crafted bombs can only be used by Engineers.",
      ],
      professionName
    ),
    "TODO: INSCRIPTION",
    "TODO: JEWELCRAFTING",
    "TODO: LEATHERWORKING",
    //tailoring
    createList(
      [
        "NOT A WHOLE LOT: While many tailoring items are BoP, the new Crafting Order system allows non-tailors to get BoP Tailoring items through other people. There are no tailoring items that actually require you to have Tailoring!",
      ],
      professionName
    ),
    "TODO: HERBALISM",
    "TODO: MINING",
    "TODO: SKINNING",
    "TODO: COOKING",
    "TODO: FISHING"
  );
};

export {
  getDescription,
  getNotableCrafts,
  getToolsAndAccessories,
  getFinishingReagents,
  getBenefits,
};
