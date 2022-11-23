import React from "react";
import "./BasicsInfo.css";
import FakeAccordion from "../FakeAccordion/FakeAccordion";

const BasicsInfo = (props) => {
  const headers = [
    "Quality Levels & Difficulty",
    "Stats",
    "Equipment",
    "Specializations & Knowledge",
    "Finishing Reagents",
  ];

  const sections = [
    <div className="info-div">
      <span className="text-med">
        <p>
          <span className="text-med-bold">Quality:</span> Most items now have
          multiple levels of Quality they can be. Reagents, consumables, etc.
          usually have 3 quality levels, while gear pieces usually have 5. These
          quality levels determine a few things:
        </p>
        <ul>
          <li>
            For <span className="text-med-bold">Crafting Reagents:</span> Higher
            quality reagents used in recipes will grant bonus Skill when
            crafting. For example, Quality 1 Ore gave me no bonus Skill in a
            recipe using it, while Quality 3 Ore gave me a large boost.
          </li>
          <li>
            For <span className="text-med-bold">Consumables:</span> Higher
            quality consumables will have more potent effects. For example, a
            Quality 1 Refreshing Healing Potion restores 68k HP, while Quality 3
            restores 93k HP.
          </li>
          <li>
            For <span className="text-med-bold">Gear:</span> Higher quality gear
            pieces are higher item levels, & therefore have more stats. For
            example, most Epic crafted gear is item level 382 at Quality 1, and
            is 392 at Quality 5.
          </li>
        </ul>
        <p>
          <span className="text-med-bold">Difficulty:</span> The Difficulty
          level of a recipe refers to the amount of Skill needed to craft at
          item at its highest Quality. For example, the Engineer's "Handful of
          Serevite Bolts" has a recipe Difficulty of 50. This means it will
          craft at Quality 1 when you have 1-24 Skill, Quality 2 when you have
          25-49 Skill, and Quality 3 when you have 50+ Skill.
        </p>
      </span>
    </div>,
    <div className="info-div">
      <span className="text-med">
        <p>
          There are many different stats that impact professions. For all of
          them, <span className="text-med-bold">Skill</span> is your bread &
          butter - the higher your Skill, the better quality gear you create.
          You gain skill equal to the amount of levels you have in your
          profession. Most Specializations will also give you 1 Skill for every
          knowledge point you spend in it. The "secondary" stats of Crafting &
          Gathering professions differ slightly.
        </p>
        <span className="text-med-bold">Crafting Stats:</span>
        <ul>
          <li>
            <span className="text-med-bold">Inspiration:</span> Basically 'Crit'
            for crafting - Gives you a chance to craft an item with bonus Skill.
            The amount of Skill granted appears to be 1/3 of a recipe's
            Difficulty (the skill needed to craft the highest quality version.),
            or 1/6 of a recipe's Difficulty when crafting gear.
          </li>
          <li>
            <span className="text-med-bold">Resourcefulness:</span> Gives you a
            chance to refund some of the materials used when crafting a recipe.
            According to the in-game tooltip, this only applies to "tradeable"
            reagents - ie, nothing that binds on pickup!
          </li>
          <li>
            <span className="text-med-bold">Multicraft:</span> Gives you a
            chance to craft more of the item. This stat is only applied when
            crafting reagents, consumables, etc. - no multicrafting high ilvl
            gear! (Unsure if this is limited to 1 extra, or if it can proc off
            itself like Windfury - will update later!)
          </li>
          <li>
            <span className="text-med-bold">Crafting Speed:</span> Reduces the
            amount of time to craft. Pretty self explanatory.
          </li>
        </ul>
        <span className="text-med-bold">Gathering Stats</span>
        <ul>
          <li>
            <span className="text-med-bold">Finesse:</span> Gives you a chance
            to gather more of the primary reagent gathered. (Unsure, like
            Multicraft, if this is a one-time thing or if it can proc multiple
            times from one gather.)
          </li>
          <li>
            <span className="text-med-bold">Deftness:</span> Basically
            "Gathering Speed." Reduces the amount of time to gather. Pretty self
            explanatory.
          </li>
          <li>
            <span className="text-med-bold">Perception:</span> Gives you a
            greater chance of gathering 'rare reagents'. (I'm currently unsure
            if this means higher quality of the primary reagent, or items like
            rousing elements. Will update later.)
          </li>
        </ul>
      </span>
    </div>,
    <div className="info-div">
      <span className="text-med">
        <p>
          {" "}
          Each profession can wield one Tool (ie a fishing rod) and two
          Accessories (ie a helm & chestpiece.) These equipment items are like
          normal gear pieces - they have stats & item level. Higher item level
          profession equipment will give more stats.
        </p>

        <ul>
          <li>
            <span className="text-med-bold">Tools</span> will have the greatest
            amount of Skill of your three items, as well as a boatload of one
            "secondary" stat. You can usually customize which secondary stat you
            want with a Missive!
          </li>
          <li>
            <span className="text-med-bold">Accessories</span> might have Skill
            on them (usually just on higher ilvl ones), and will have 1-2
            predefined "secondary" stats.
          </li>
        </ul>
      </span>
    </div>,
    <div className="info-div">
      <span className="text-med">
        <span className="text-med-bold">Specializations:</span>
        <ul>
          <li>
            Each profession has 3-4 main Specializations. These are basically
            talent trees that allow you to become stronger in a specific aspect
            of your craft.
          </li>
          <li>
            You unlock the Specialization "trees" at profession level 25, with
            each main tree locked. You can choose one main tree to unlock every
            25 profession levels. (levels 25, 50, 75, & 100)
          </li>
          <li>
            Each main tree has a node to specialize in. You do this by applying
            "Knowledge" (more on that below) to that node.
          </li>
          <li>
            Each "node" gives a bonus for each Knowledge point applied, a unique
            bonus for every 5 Knowledge applied, and a maximum amount of
            Knowledge you can spend in it. (For example: Enchanting's
            Enchantment tree has a node that gives +1 Skill for every Knowledge
            applied to it. You can apply a maximum of 30 into it.)
          </li>
          <li>
            Each main tree has multiple "Sub-Specializations" that you can
            unlock after reaching certain levels. (For example: Enchanting's
            Enchantment tree has two Sub-Specializations. You can unlock the
            first one after applying 10 Knowledge to Enchantment, and the other
            after applying 20 Knowledge.
          </li>
          <li>
            Each Sub-Specialization can have its own Sub-Specializations! These
            function exactly like above!
          </li>
        </ul>
        <span className="text-med-bold">Knowledge:</span>
        <ul>
          <li>
            Each Profession has its own pool of Knowledge (think of them as
            Specialization Points) to apply to its Specializations. These are
            accrued in a couple different ways:
          </li>
          <li className="hide-bullet-point">
            <ul>
              <li>
                Crafting an item for the first time will give you 1 Knowledge.
              </li>
              <li>
                Daily quests near your profession's crafting table in Valdrakken
                will give you multiple Knowledge.
              </li>
              <li>
                Inscriptionists can craft bind on equip Tomes that give 1
                Knowledge. You can use one of these per profession per week.
              </li>
              <li>
                Certain treasures on the Dragon Isles will give you Knowledge,
                but only once per treasure.
              </li>
              <li>
                The Artisan's Consortium will sell three different books of
                knowledge per Profession, purchased with Artisan's Mettle
                (currency received from crafting - more on that later.) These
                are one-time purchases.
              </li>
              <li>
                There are probably other methods I'm unaware of, but these are
                the main ones.
              </li>
            </ul>
          </li>
          <li>
            Once applied to a Specialization,{" "}
            <span className="text-med-bold">
              Knowledge cannot be refunded/reallocated.
            </span>{" "}
            Think long and hard about where you want to specialize - there are
            no take-backsies.
          </li>
        </ul>
      </span>
    </div>,
    <div className="info-div">
      <span className="text-med">
        <p>
          Many recipes can be enhanced with optional{" "}
          <span className="text-med-bold">Finishing Reagents</span>. This is
          basically an expansion of the Crafter's Mark/Missive system from
          Shadowlands. Most can only be used in a recipe once you have gotten a
          certain Specialization level that corresponds to that type of craft.
          There are a few types of common Finishing Reagents:
        </p>

        <ul>
          <li>
            <span className="text-med-ital">
              (Most of these will have links to pages detailing them - coming
              soon!)
            </span>
          </li>
          <li>
            <span className="text-med-bold">
              Illustrious Insight & Lesser Illustrious Insight:
            </span>{" "}
            Increases Skill by 30. Used in almost all recipes with Quality
            levels. Higher ilvl gear pieces will usually use Illustrious
            Insight, whereas reagents, consumables & lower ilvl gear pieces
            usually use Lesser Illustrious Insight.
          </li>
          <li>
            <span className="text-med-bold">
              Profession Specific Finishing Reagents:
            </span>{" "}
            These largely have similar effects (ie, 'increase Inspiration by 30
            & bonus Skill granted by Inspiration by 7%', or 'increase chance of
            improving in your profession, but increase Recipe Difficulty').
            However, each Profession has a different type/name for them. For
            example, Tailors use "Embroidery Thread", while Jewelcrafters use
            "Polishing Cloth." Each type is crafted by a different profession.
            (For example, "Polishing Cloth" used by Jewelcrafters, are made by
            Tailors.)
          </li>
          <li>
            <span className="text-med-bold">
              Gear Specific Finishing Reagents:
            </span>
            <ul>
              <li>
                <span className="text-med-bold">Missives:</span> Customize the
                secondary stats on a piece of gear. Crafted by Inscriptionists.
                Unlike Shadowlands, there are now missives for each pair of
                secondary stats (ie Draconic Missive of the Fireflash gives Crit
                & Haste.) There are also missives for Profession Gear & their
                secondary stats!
              </li>
              <li>
                <span className="text-med-bold">
                  Training Matrixes/Primal Infusions:
                </span>{" "}
                Set the item level range of a piece of gear, and increase recipe
                Difficulty. These are basically the Crafter's Marks from
                Shadowlands. Lower ilvl crafted gear use Training Matrixes
                (which drop off of dungeon bosses), while Epic crafted gear use
                Primal Infusions (I think drop off of raid bosses?). There are
                four levels of Training Matrixes, and two levels of Primal
                Infusions.
              </li>
              <li>
                <span className="text-med-bold">Embellishments:</span> Gives a
                piece of gear a special effect, give it Unique-Equipped:
                Embellished (2), and increase recipe Difficulty. A popular
                example is the Alchemical Flavor Pocket - "Increases duration of
                Well Fed by 100% & they now persist through death." These are
                crafted by different professions, and you can only have 2
                Embellished pieces on at a time. Usually only applicable to Epic
                crafted gear that don't already have Embellishments.
              </li>
            </ul>
          </li>
        </ul>
      </span>
    </div>,
  ];

  return (
    <div id="Basics-Info" className="basics-component">
      <FakeAccordion
        sections={5}
        headers={headers}
        colSize={4}
        content={sections}
      />
    </div>
  );
};

export default BasicsInfo;
