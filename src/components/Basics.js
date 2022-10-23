import { React } from 'react';
import './Basics.css';

const Basics = props => {
    return(
        <div className='Basics'>
            <h1>How have professions changed in Dragonflight?</h1>
            <ol>
                {/* TO-DO: allow minimizing/expanding of each main list item */}
                <li>All professions now have "Equipment" - three different items that improve your crafting or gathering.
                    <ul>
                        <li>These include a <span className='highlight'>Tool</span> (i.e. a fishing rod) and two <span className='highlight'>Accessories</span> (i.e. a helm and chestpiece.)</li>
                        <li>Equipment items are like normal gear pieces - they have stats & item level. Higher ilvl profession equipment will give more stats.</li>
                    </ul>
                </li>

                <li>All professions now have stats.
                    <ul>
                        <li>Both Crafters & Gatherers have a "primary" stat - <span className='highlight'>Skill</span>.</li>
                        <li>For Crafters, the other stats are <span className='highlight'>Inspiration</span>, <span className='highlight'>Resourcefulness</span>, <span className='highlight'>Multicraft</span>, and <span className='highlight'>Crafting Speed</span>.</li>
                        <li>For Gatherers, the other stats are <span className='highlight'>Finesse</span>, <span className='highlight'>Deftness</span>, and <span className='highlight'>Perception</span>.</li>
                        <li>For more info on stats, click <span className='highlight'>here. (not yet implemented)</span></li>
                    </ul>
                </li>

                <li>Most Crafting recipes have a <span className='highlight'>"Difficulty"</span> level, and different levels of quality.
                    <ul>
                        <li>A recipe's <span className='highlight'>Difficulty</span> indicates the amount of Skill you need to craft that item at its highest quality.</li>
                        <li>Quality levels affect the potency/strength of an item.
                            <ul>
                                <li>Higher quality reagents will give a boost in Skill to any recipe using them.</li>
                                <li>Higher quality consumables will have stronger effects or durations.</li>
                                <li>Higher quality gear pieces will have a higher item level.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>All professions (sans Cooking & Fishing) have <span className='highlight'>Specializations</span>.
                    <ul>
                        <li>These allow you to specialize yourself further, making you better at certain aspects of your profession.</li>
                        <li>Professions have 3-4 "main" Specializations. At levels 25, 50, 75, and 100, you get to choose one of the Specializations to unlock.
                            <ul>
                                {/* maybe I should do a gif/image demo here to better explain how it works */}
                                <li>For example, Enchanting has three main Specializations. The first Specialization, "Enchantment", gives bonuses to making enchantments for gear.</li>
                            </ul>
                        </li>
                        <li>Each Specialization has multiple Sub-Specializations - allowing you to specialize in even more specific parts of your profession.
                            <ul>
                                <li>For example, Enchanting's first main Specialization, "Enchantment", has two Sub-Specializations - one gives bonuses to Weapon enchants, one gives bonuses to Armor enchants.</li>
                            </ul>
                        </li>
                        <li>"Profession Knowledge" points are the main way to become stronger in a Specialization. You can freely allocate them into any Specialization you have unlocked.
                            <ul>
                                <li><em>for brevity, I will refer to Profession Knowledge points as "Knowledge" from here on out.</em></li>
                                <li>You can unlock more Knowledge in a variety of ways:
                                    <ul>
                                        <li>Your first craft of any item gives 1 Knowledge.</li>
                                        <li>There are both daily and weekly quests to get more Knowledge.</li>
                                        <li>Scribes craft items to give 1 Knowledge in a profession, usable once a week per profession.</li>
                                    </ul>
                                </li>
                                <li>Each Specialization has bonuses for unlocking it, individual Knowledge spent, & a unique bonus for every 5 Knowledge spent. Examples:
                                    <ul>
                                        <li>Unlocking the "Enchantment" Specialization gives +5 Skill when crafting gear enchants.</li>
                                        <li>You can spend a maximum of 30 Knowledge in "Enchantment".</li>
                                        <li>Each Knowledge spent in "Enchantment" gives +1 Skill to Enchanting.</li>
                                        <li>Putting 5 Knowledge in "Enchantment" gives +5 Inspiration when crafting gear enchants.</li>
                                        <li>Putting 10 Knowledge in "Enchantment" allows you to unlock a Sub-Specialization of "Enchantment".</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>Many recipes have optional <span className='highlight'>Finishing Reagent(s)</span> that you can use to improve the craft.
                    <ul>
                        <li>Think of Missives & Crafter's Marks from Shadowlands.</li>
                        <li><strong>Eh. I'll write more on this later.</strong></li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}

export default Basics;