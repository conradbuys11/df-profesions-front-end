import React, {useEffect, useState} from 'react';
import './Basics.css';

const Basics = props => {
    return(
        <div>
            <h1>How have professions changed in Dragonflight?</h1>
            <ul>

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
                        <li>For more info on stats, click <span className='highlight'>here (not yet implemented)</span></li>
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
            </ul>
        </div>
    )
}

export default Basics;