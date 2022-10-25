import React from "react";
import './BasicsInfo.css';
import BasicsInfoButton from "./BasicsInfoButton";
import Accordion from 'react-bootstrap/Accordion';

const BasicsInfo = props => {
    return(
        <div id="Basics-Info" className="basics-component">
            <Accordion alwaysOpen="true">
                <BasicsInfoButton eventKey="0" header="Stats" body={
                <>
                    There are many different stats that impact professions.
                    <ul>
                        <li><span className="text-med-bold">Skill</span> is your bread & butter - the higher your Skill, the better quality gear you create. You gain skill equal to the amount of levels you have in your profession. Most Specializations will also give you 1 Skill for every knowledge point you spend in it.</li>
                    </ul>
                </>
                } />

                <BasicsInfoButton eventKey="1" header="Equipment">
                    Each profession can wield one Tool (ie a fishing rod) and two Accessories (ie a helm & chestpiece.) These equipment items are like normal gear pieces - they have stats & item level. Higher item level profession equipment will give more stats.

                </BasicsInfoButton>


                <BasicsInfoButton eventKey="2" header ="Difficulty" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />

                <BasicsInfoButton eventKey="3" header="Specializations" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />

                <BasicsInfoButton eventKey="4" header="Finishing Reagents" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />
            </Accordion>
        </div>
    )
}

export default BasicsInfo;