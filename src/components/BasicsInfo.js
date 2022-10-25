import React from "react";
import './BasicsInfo.css';
import BasicsInfoButton from "./BasicsInfoButton";
import Accordion from 'react-bootstrap/Accordion';

const BasicsInfo = props => {
    return(
        <div id="Basics-Info" className="basics-component">
            <Accordion>
                <BasicsInfoButton eventKey="0" header="Equipment" body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Stats</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Difficulty</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Specializations</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Finishing Reagents</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default BasicsInfo;