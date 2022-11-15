import { Link } from "react-router-dom";

const ProfessionDescriptionInfo = () => {
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
      //alchemy
      "Alchemists are the premier source of combat consumables - namely, Phials (the replacements for flasks) & potions. They can also make special Alchemist Stone trinkets.",
      //blacksmithing
      "Blacksmiths are the forgers of Plate gear, most weapons, & shields! They can also craft a variety of Profession Tools.",
      //enchanting
      "Enchanters make important enhancements to many gear pieces. They also craft Wands & some fun illusions.",
      // engineering
      "Engineers are the kings of gizmos and gadgets. Explosives, goggles with funky effects, guns, and quality of life toys are your bread and butter. Just make sure they don't backfire!",
      // inscription
      "Scribes make the all-important Missives, used to set secondary stats on crafted pieces. They also can make trinkets, off-hands, staves, and a whopping 20 Dragonriding customizations.",
      // jewelcrafting
      "Jewelcrafters cut gems that give extra stats to gear with prismatic sockets. They also make rings & necklaces, and a few trinkets that are stronger for each gem you have socketed.",
      // leatherworking
      "Leatherworkers are the makers of Leather and Mail gear. They also make leg enchants for Strength & Agility users, and a variety of Profession Accesories.",
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
      //alchemy
      createList(
        [
          "PHIALS: The new flask, Phials are much more varied this time around, doing everything from giving Versatility to exploding for damage upon hitting new enemies.",
          "POTIONS: Like Phials, combat potions are much more varied this time around. There are even some you can use while dead!",
          "CAULDRONS: Previous cauldrons gave an entire raid flasks - these new cauldrons will instead give your raid Potions.",
          "ALCHEMIST STONES: Two different trinkets, each with a main stat proc, as well as either increasing your Phial duration or reducing your Potion cooldown.",
          "TRANSMUTATIONS: Rousing & Awakened Elements are going to be hot commodities, and Alchemists can transmute them often.",
        ],
        professionName
      ),
      //blacksmithing
      createList(
        [
          "PLATE GEAR: All 8 plate armor slots are available to craft. PvP versions too! There are also some pre-Embellished gear pieces that focus on giving you & nearby allies Versatility.",
          "WEAPONS & SHIELDS: Blacksmiths craft most melee weapons, making them highly sought after for crafting orders. This also includes shields.",
          "PROFESSION EQUIPMENT: Blacksmiths craft Tools for Blacksmiths, Leatherworkers, Miners, Herbalists, & Skinners, and Toolkit Accessories for Blacksmiths, Leatherworkers, and Tailors.",
          "WEAPON STONES: Whetstones & Weightstones are back - 60min consumables for melee weapons that give a flat Attack Power increase. There is also a Razorstone to strengthen Gathering Skill Tools!",
        ],
        professionName
      ),
      //enchanting
      createList(
        [
          "GEAR ENCHANTMENTS: Cloak, Chest, Bracer, Boot, and Ring enchantments are all made by Enchanters.",
          "WEAPON & TOOL ENCHANTMENTS: There are 10 unique melee weapon enchantments, as well as 5 different enchants for Gathering & Profession Tools!",
          "PROFESSION EQUIPMENT: Enchanters craft Tools for Enchanters.",
          "WANDS: There are two different wands available to craft for those casters who can use them!",
          "ILLUSIONS: Enchanters can craft 5 new weapon enchantment appearances, as well as temporary shoulder illusions & wands that shoot orbs.",
        ],
        professionName
      ),
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
      // inscription
      createList(
        [
          "MISSIVES: Almost all crafted gear across all professions can set their secondary stats with Missives. There are also now missives for Profession Tools!",
          "DARKMOON DECKS & DECK BOXES: Always a strong early money maker, Darkmoon Decks can now be enhanced further into Deck Boxes, giving them a 10-20 item level boost.",
          "PROFESSION EQUIPMENT: Scribes make Tools for Alchemists, Cooks, & Scribes.",
          "EXTRA PROFESSION KNOWLEDGE: Draconic Treatises consumables can be crafted by Scribes, granting 1 extra Knowledge per week in a Profession. Just about everyone is gonna want one of these per profession per week.",
          "STAVES & OFF-HANDS: Powerful two-handed Intellect or Agility staves can be made, as well as Intellect off-hands.",
          "CONTRACTS: The old classic, giving 10-15 extra rep with a specific faction per world quest.",
          "DRAGONRIDING CUSTOMIZATIONS: Five unique customizations for each of the four Dragonriding mounts can be made by Scribes.",
        ],
        professionName
      ),
      // jewelcrafting
      createList(
        [
          "GEMS: The bread & butter of JC is making gems. Many gems have two secondary stats on them now, and there are also Primalist gems with primary stat on them (can only socket one of them)",
          "JEWELRY: Necklaces and rings are used by every class, and come with a boatload of secondary stats on them. There are a few Embellished varieties available as well.",
          "PROFESSION EQUIPMENT: Jewelcrafters make Head Accessories for Jewelcrafters & Scribes, Magnifying Glass Accessories for Scribes, and Focus Accessories for Enchanters.",
          "IDOL TRINKETS: Each of the dragon aspects has their own Idol trinket, which proc to grant secondary stats based on how much of their type of gem you have equipped.",
          "PETS, TOYS & COSMETICS: Jewelcrafters can make a set of Jeweled Whelplings for each flight, a few fun toys, and two Cosmetic goggles for transmog!",
        ],
        professionName
      ),
      // leatherworking
      createList(
        [
          "LEATHER/MAIL GEAR: All 8 leather and mail armor slots are made by Leatherworkers. PvP versions too! There is also one gear set for each armor type, and a variety of Decay-themed boots with unique effects to try out.",
          "BOWS: While Engineers make guns for Hunters, Leatherworkers can make bows. Pretty self explanatory - these are your weapons of choice for Marksman/Beast Mastery Hunters.",
          "PROFESSION EQUIPMENT: Leatherworkers make Head Accessories for Alchemists & Skinners, Chest Accessories for Blacksmiths, Leatherworkers, & Jewelcrafters, Back Accessories for Herbalists & Skinners, and Hand Accessories for Engineers.",
          "AGILITY/STRENGTH LEG ENCHANTS: Armor Kits are leg enchants with Agility & Strength on them. Needed for every tank, melee DPS, & hunter!",
          "DRUMS: Don't have a bloodlust effect in your party? No problem. Get a (slightly less powerful) bloodlust on a cooldown.",
        ],
        professionName
      ),
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
      //alchemy
      createList(
        [
          "TOOL: Made by Inscriptionists. Alchemist's Brilliant Mixing Rod (higher ilvl, BoP) or Draconium Encased Samophlange (lower ilvl, BoE.)",
          "HEAD ACCESSORY: Made by Leatherworkers. Expert Alchemist's Hat (higher ilvl, BoP) or Alchemist's Hat (lower ilvl, BoE.)",
          "CHEST ACCESSORY: Made by Tailors. Master Wildercloth Alchemist's Robe (higher ilvl, BoP) or Wildercloth Alchemist's Robe (lower ilvl, BoE.)",
        ],
        professionName
      ),
      //blacksmithing
      createList(
        [
          "TOOL: Made by Blacksmiths. Black Touched Dragon Hammer (VERY high ilvl, BoP), Khaz'gorite Blacksmith's Hammer (higher ilvl, BoP), or Draconium Blacksmith's Hammer (lower ilvl, BoE.)",
          "CHEST ACCESSORY: Made by Leatherworkers. Flameproof Apron (higher ilvl, BoP) or Smithing Apron (lower ilvl, BoE.)",
          "TOOLKIT ACCESSORY: Made by Blacksmiths. Khaz'gorite Blacksmith's Toolbox (higher ilvl, BoP) or Draconium Blacksmith's Toolbox (lower ilvl, BoE.)",
        ],
        professionName
      ),
      //enchanting
      createList(
        [
          "TOOL: Made by Enchanters. Runed Khaz'gorite Rod (higher ilvl, BoP), Runed Draconium Rod (lower ilvl, BoE), or Runed Serevite Rod (very low ilvl, BoE.)",
          "HEAD ACCESORY: Made by Tailors. Master Wildercloth Enchanter's Hat (higher ilvl, BoP) or Wildercloth Enchanter's Hat (lower ilvl, BoE.)",
          "FOCUS ACCESSORY: Made by Jewelcrafters. Resonant Focus (higher ilvl, BoP) or Chromatic Focus (higher ilvl, BoE.)",
        ],
        professionName
      ),
      //engineering
      createList(
        [
          "TOOL: Made by Engineers. Khaz'gorite Encased Samophlange (higher ilvl, BoP) or Draconium Encased Samophlange (lower ilvl, BoE.)",
          "HEAD ACCESSORY: Made by Engineers. Khaz'gorite Brainwave Amplifier (higher ilvl, BoP) or Draconium Brainwave Amplifier (lower ilvl, BoE)",
          "HAND ACCESSORY: Made by Jewelcrafters. Shockproof Gloves (higher ilvl, BoP) or Protective Gloves (lower ilvl, BoE.)",
        ],
        professionName
      ),
      // inscription
      createList(
        [
          "TOOL: Made by Scribes. Scribe's Resplendent Quill (higher ilvl, BoP) or Scribe's Fastened Quill (lower ilvl, BoE.)",
          "HEAD ACCESSORY: Made by Jewelcrafters. Fine-Print Trifocals (higher ilvl, BoP) or Bold-Print Bifocals (lower ilvl, BoE.)",
          "MAGNIFYING GLASS ACCESSORY: Made by Jewelcrafters. Magnificent Margin Magnifier (higher ilvl, BoP) or Left-Handed Magnifying Glass (lower ilvl, BoE.)",
        ],
        professionName
      ),
      // jewelcrafting
      createList(
        [
          "TOOL: Made by Engineers. Lapidary's Khaz'gorite Clamps (higher ilvl, BoP) or Lapidary's Draconium Clamps (lower ilvl, BoE.)",
          "HEAD ACCESSORY: Made by Jewelcrafters. Alexstraszite Loupes (higher ilvl, BoP) or Sundered Onyx Loupes (lower ilvl, BoE.)",
          "CHEST ACCESSORY: Made by Leatherworkers. Resplendent Cover (higher ilvl, BoP) or Jeweler's Cover (lower ilvl, BoE.)",
        ],
        professionName
      ),
      // leatherworking
      createList(
        [
          "TOOL: Made by Blacksmiths. Khaz'gorite Leatherworker's Knife (higher ilvl, BoP) or Draconium Leatherworker's Knife (lower ilvl, BoE.)",
          "CHEST ACCESSORY: Made by Leatherworkers. Masterwork Smock (higher ilvl, BoP) or Resilient Smock (higher ilvl, BoE).",
          "TOOLKIT ACCESSORY: Made by Blacksmiths. Khaz'gorite Leatherworker's Toolset (higher ilvl, BoP) or Draconium Leatherworker's Toolset (lower ilvl, BoE.)",
        ],
        professionName
      ),
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
      //alchemy
      createList(
        [
          <>
            ALCHEMICAL CATALYSTS{" "}
            <Link to={`/items/finishingreagents/Alchemical_Catalyst_-_Potion`}>
              (potion)
            </Link>{" "}
            &{" "}
            <Link to={`/items/finishingreagents/Alchemical_Catalyst_-_Phial`}>
              (phial)
            </Link>
            : Made by Alchemists. Includes Brood Salt (also useable by
            leatherworkers!), and either Agitating Potion Augmentation or
            Reactive Phial Embellishment, depending on what you're crafting.
          </>,
        ],
        professionName
      ),
      //blacksmithing
      createList(
        [
          <>
            <Link to={`/items/finishingreagents/Quenching_Fluid`}>
              QUENCHING FLUID:
            </Link>{" "}
            Made by Alchemists. Includes Stable Fluidic Draconium & Writhefire
            Oil.
          </>,
        ],
        professionName
      ),
      //enchanting
      "Unless you count Vellums, Enchanters don't actually have any unique finishing reagents.",
      //engineeringprofessionName
      createList(
        [
          <>
            <Link to={`/items/finishingreagents/Spare_Parts`}>
              SPARE PARTS:
            </Link>{" "}
            Made by Engineers. Includes Overcharged Overclocker & Haphazardly
            Tethered Wires.
          </>,
          <>
            <Link to={`/items/finishingreagents/Safety_Components`}>
              SAFETY COMPONENTS:
            </Link>{" "}
            Made by Engineers. Can be used on a piece of gear with a Tinker
            socket. Affects the chances or effects of a Tinker malfunction.
          </>,
          <>
            <Link to={`/items/finishingreagents/Cogwheel`}>COGWHEELS:</Link>{" "}
            Made by Engineers. Can be used on a piece of Engineering gear to
            guarantee a secondary stat. Basically a missive for Goggles or
            Bracers.
          </>,
        ],
        professionName
      ),
      // inscription
      createList(
        [
          <>
            <Link to={`/items/finishingreagents/Blotting_Sand`}>
              BLOTTING SAND:
            </Link>{" "}
            Made by Jewelcrafters. Includes Blotting Sand & Pounce.
          </>,
          <>
            <Link to={`/items/finishingreagents/Darkmoon_Sigil`}>
              DARKMOON SIGILS:
            </Link>{" "}
            Made by Scribes. Affects the way the Darkmoon Deck Box shuffles.
          </>,
        ],
        professionName
      ),
      // jewelcrafting
      createList(
        [
          <>
            <Link to={`/items/finishingreagents/Polishing_Cloth`}>
              POLISHING CLOTH:
            </Link>{" "}
            Made by Tailors. Includes Abrasive & Vibrant Polishing Cloth.
          </>,
        ],
        professionName
      ),
      // leatherworking
      createList(
        [
          <>
            <Link to={`/items/finishingreagents/Curing_Agent`}>
              CURING AGENTS:
            </Link>{" "}
            Used for Leather armor, made by Alchemists. Includes Writhefire Oil
            & Brood Salt.
          </>,
          <>
            <Link to={`/items/finishingreagents/Chain_Oil`}>CHAIN OIL:</Link>{" "}
            Used for Mail armor, made by Alchemists. Includes Writhefire Oil &
            Stable Fluidic Draconium.
          </>,
        ],
        professionName
      ),
      //tailoring
      createList(
        [
          <>
            <Link to={`/items/finishingreagents/Embroidery_Thread`}>
              EMBROIDERY THREAD:
            </Link>{" "}
            Made by Tailors. Includes Chromatic, Shimmering, & Blazing
            Embroidery Thread.
          </>,
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
      //alchemy
      createList(
        [
          "UP TO 1.5 HOUR PHIALS: With enough specialization points, you can get triple the duration out of one Phial.",
          "REDUCED NEGATIVE EFFECTS FROM TOXIC PHIALS/POTIONS: If any of the Toxic Phials/Potions turn out to be good, Alchemists can specialize in reducing the side effects by up to 50%.",
        ],
        professionName
      ),
      //blacksmithing
      createList(
        [
          "REPAIRS: Blacksmiths can craft Repair Hammers, a consumable which repairs a piece of plate gear fully, and it can only be used if you have Blacksmithing 25. They can also eventually craft the Master's Hammer - it isn't consumed when repairing, but requires you to be specialized in the piece of gear you're repairing.",
        ],
        professionName
      ),
      //enchanting
      createList(
        [
          "MORE DISENCHANTABLE ITEMS: You can specialize to have mobs randomly drop Mystic items. They can be disenchanted for extra materials! (No sell price or other use, though.)",
          "ELEMENTAL SHATTERING: Enchanters can specialize to learn how to shatter Awakened elements, getting minor open world buffs from destroying them.",
        ],
        professionName
      ),
      //engineering
      createList(
        [
          "GOGGLES W/ TINKER SOCKET: While the bracers Engineers can craft are universal, you can only wear the goggles if you have Engineering 1.",
          "WYRMHOLE GENERATOR: A nice toy to zip you around the Dragon Isles on a 1-2 Hour CD. Can only be used by Engineers.",
          "S.A.V.I.O.R. & EXPLOSIVES: The wipe protection bot can only be used by Engineers, and the non-EZ-Thro version of crafted bombs can only be used by Engineers.",
          "BOMB MASTER: You can specialize in getting more damage from bombs, as well as reduced likelihood of their malfunction.",
        ],
        professionName
      ),
      // inscription
      createList(
        [
          "MORE DARKMOON CARDS: Scribes can specialize in higher chance of finding Darkmoon cards, and can make the Bundle O Cards: Dragon Isles (basically, a booster pack of Darkmoon cards)",
        ],
        professionName
      ),
      // jewelcrafting
      createList(
        [
          "CONVERT LOW QUALITY GEMS: Jewelcrafters can specialize in being able to turn green-quality gems into blue-quality gems! Like a Transmutation, but shinier.",
        ],
        professionName
      ),
      // leatherworking
      createList(
        [
          "NOT A WHOLE LOT: While you get an incredible variety of gear to craft, there isn't a whole lot you can do with Leatherworking that you can't also get satisfied with a Crafting Order.",
        ],
        professionName
      ),
      //tailoring
      createList(
        [
          "INCREASED CLOTH ACQUISITION: You can specialize to get not only up to 150% more cloth from mobs, but also to be able to get Bolts or Elemental cloth (elements can be extracted from them.)",
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

  return {
    getDescription,
    getNotableCrafts,
    getToolsAndAccessories,
    getFinishingReagents,
    getBenefits,
  };
};

export default ProfessionDescriptionInfo;
