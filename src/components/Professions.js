import React, {useEffect, useState} from 'react';
import './Professions.css';
import ProfessionButton from './ProfessionButton.js';

const Professions = props => {

    const iconURL = "https://wow.zamimg.com/images/wow/icons/large/ui_profession_";
    const craftingProfessions = [
        {name: "Alchemy", icon: `${iconURL}alchemy.jpg`},
        {name: "Blacksmithing", icon: `${iconURL}blacksmithing.jpg`},
        {name: "Enchanting", icon: `${iconURL}enchanting.jpg`},
        {name: "Engineering", icon: `${iconURL}engineering.jpg`},
        {name: "Inscription", icon: `${iconURL}inscription.jpg`},
        {name: "Jewelcrafting", icon: `${iconURL}jewelcrafting.jpg`},
        {name: "Leatherworking", icon: `${iconURL}leatherworking.jpg`},
        {name: "Tailoring", icon: `${iconURL}tailoring.jpg`}
    ];
    const gatheringProfessions = [
        {name: "Herbalism", icon: `${iconURL}herbalism.jpg`},
        {name: "Mining", icon: `${iconURL}mining.jpg`},
        {name: "Skinning", icon: `${iconURL}skinning.jpg`}
    ];
    const secondaryProfessions = [
        {name: "Cooking", icon: `${iconURL}cooking.jpg`},
        {name: "Fishing", icon: `${iconURL}fishing.jpg`}
    ];

    const makeProfessionButtons = arr => {
        arr.map(prof => {
            // console.log(`Name: ${prof.name}. Icon: ${prof.icon}`)
            return <ProfessionButton name={prof.name} icon={prof.icon} />
        })
    }

    const craftingButtons = makeProfessionButtons(craftingProfessions);
    const gatheringButtons = makeProfessionButtons(gatheringProfessions);
    const secondaryButtons = makeProfessionButtons(secondaryProfessions);

    return(
        <div>
            <ProfessionButton name={"Alchemy"}  icon={craftingProfessions[0].icon}/>
            {craftingButtons}
            <br />
            {gatheringButtons}
            <br />
            {secondaryButtons}
        </div>
    )
}

export default Professions;