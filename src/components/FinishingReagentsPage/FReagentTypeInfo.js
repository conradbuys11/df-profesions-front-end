const FReagentTypeInfo = () => {
  class FReagentType {
    constructor(name, description, professionUsedFor) {
      this.name = name;
      this.description = description;
      this.professionUsedFor = professionUsedFor;
    }
  }

  const types = [
    new FReagentType(
      "Lesser Illustrious Insight",
      "Used to gain +30 Skill when crafting lesser items.",
      "All Professions"
    ),
    new FReagentType(
      "Illustrious Insight",
      "Used to gain +30 Skill when crafting greater items.",
      "All Professions"
    ),
    new FReagentType(
      "Training Matrix",
      "Used to set the item level of Rare crafted gear pieces.",
      "All Professions"
    ),
    new FReagentType(
      "Primal Infusion",
      "Used to set the item level of Epic crafted gear pieces.",
      "All Professions"
    ),
    new FReagentType(
      "Embellishment",
      "Used to give a unique effect to crafted gear pieces. Can only wear 2 pieces of Embellished gear.",
      "All Professions"
    ),
    new FReagentType(
      "Missive - Combat",
      "Used to set the secondary stats of crafted gear pieces. Not used by Engineers.",
      "All Professions"
    ),
    new FReagentType(
      "Missive - Crafting",
      "Used to set the secondary stat of Crafting Profession Tools.",
      "All Professions"
    ),
    new FReagentType(
      "Missive - Gathering",
      "Used to set the secondary stat of Gathering Profession Tools.",
      "All Professions"
    ),
    new FReagentType(
      "Polishing Cloth",
      "Used to improve the crafting of Jewelcrafting items.",
      "Jewelcrafting"
    ),
    new FReagentType(
      "Embroidery Thread",
      "Used to improve the crafting of Tailoring items.",
      "Tailoring"
    ),
    new FReagentType(
      "Spare Parts",
      "Used to improve the crafting of Engineering items.",
      "Engineering"
    ),
    new FReagentType(
      "Safety Components",
      "Used to reduce the negative effects of Tinker malfunctions in any piece of gear with a Tinker socket.",
      "Engineering"
    ),
    new FReagentType(
      "Cogwheel",
      "Used to set the secondary stat of Engineering crafted gear pieces.",
      "Engineering"
    ),
    new FReagentType(
      "Curing Agent",
      "Used to improve the crafting of Leatherworking Leather gear pieces.",
      "Leatherworking"
    ),
    new FReagentType(
      "Chain Oil",
      "Used to improve the crafting of Leatherworking Mail gear pieces.",
      "Leatherworking"
    ),
    new FReagentType(
      "Quenching Fluid",
      "Used to improve the crafting of Blacksmithing gear pieces.",
      "Blacksmithing"
    ),
    new FReagentType(
      "Alchemical Catalyst - Potion",
      "Used to improve the crafting of Alchemy potions.",
      "Alchemy"
    ),
    new FReagentType(
      "Alchemical Catalyst - Phial",
      "Used to improve the crafting of Alchemy phials.",
      "Alchemy"
    ),
    new FReagentType(
      "Darkmoon Sigil",
      "Used to improve the deck shuffling properties of Darkmoon Deck Boxes.",
      "Inscription"
    ),
    new FReagentType(
      "Blotting Sand",
      "Used to improve the crafting of Inscription items.",
      "Inscription"
    ),
    new FReagentType(
      "Finishing Touches",
      "Used to improve the crafting of Cooking items.",
      "Cooking"
    ),
    new FReagentType(
      "Secret Ingredient",
      "Used to improve the crafting of Cooking items.",
      "Cooking"
    ),
  ];

  const professions = [
    "All Professions",
    "Alchemy",
    "Blacksmithing",
    "Enchanting",
    "Engineering",
    "Inscription",
    "Jewelcrafting",
    "Leatherworking",
    "Tailoring",
    "Cooking",
  ];

  return { types, professions };
};

export default FReagentTypeInfo;
