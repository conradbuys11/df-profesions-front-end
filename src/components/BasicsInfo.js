import React from "react";
import './BasicsInfo.css';
import BasicsInfoButton from "./BasicsInfoButton";
import Accordion from 'react-bootstrap/Accordion';

const BasicsInfo = props => {
    return(
        <div id="Basics-Info" className="basics-component">
            <Accordion>
                <BasicsInfoButton eventKey="0" header="Equipment" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />

                <BasicsInfoButton eventKey="1" header="Stats" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />

                <BasicsInfoButton eventKey="2" header ="Difficulty" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />

                <BasicsInfoButton eventKey="3" header="Specializations" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />

                <BasicsInfoButton eventKey="4" header="Specializations" body={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                } />
            </Accordion>
        </div>
    )
}

export default BasicsInfo;