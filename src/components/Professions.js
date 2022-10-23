import React from 'react';
import './Professions.css';
import ProfessionButton from './ProfessionButton.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Professions = props => {

    let buttonKey = 0;
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
        return arr.map(prof => {
            // console.log(`Name: ${prof.name}. Icon: ${prof.icon}`)
            buttonKey += 1;
            return (<ProfessionButton key={buttonKey} name={prof.name} icon={prof.icon} />);
        })
    }

    const craftingButtons = makeProfessionButtons(craftingProfessions);
    const gatheringButtons = makeProfessionButtons(gatheringProfessions);
    const secondaryButtons = makeProfessionButtons(secondaryProfessions);

    return(
        <div className='Professions'>
            <Container>
                <h2>Crafting Professions:</h2>
                <Row>
                    {craftingButtons}
                </Row>

                <h2>Gathering Professions:</h2>
                <Row>
                    {gatheringButtons}
                </Row>
                
                <h2>Secondary Professions:</h2>
                <Row>
                    {secondaryButtons}
                </Row>
            </Container>
        </div>
    )
}

export default Professions;