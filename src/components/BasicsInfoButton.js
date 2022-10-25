import React from "react";
import './BasicsInfoButton.css';
import Accordion from 'react-bootstrap/Accordion';

const BasicsInfoButton = props => {
    //props: eventKey, header, body

    return(
        <div className="Basics-Info-Button">
            <Accordion.Item eventKey={props.eventKey}>
                    <Accordion.Header>{props.header}</Accordion.Header>
                    <Accordion.Body>
                    {props.body}
                    </Accordion.Body>
            </Accordion.Item>
        </div>
    )
}

export default BasicsInfoButton;