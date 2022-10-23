import React from 'react';
import './ProfessionButton.css';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


//props are name (ie Engineering) and icon (the URL to wowhead icon)
const ProfessionButton = props => {

    const handleClick = e => {
        console.log('yeah, you clicked');
    }

    return(

        <Col lg="3" md="4" sm="6">
            <div className='Profession-Button' onClick={handleClick}>
                <img className='prof-button-icon' src={props.icon} alt={`${props.name} Icon`} />
                <h5 className='prof-button-name'>{props.name}</h5>
            </div>
        </Col>
    )
}

export default ProfessionButton;