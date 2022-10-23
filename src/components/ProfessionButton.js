import React from 'react';
import './ProfessionButton.css';
import Col from 'react-bootstrap/Col';


//props are name (ie Engineering) and icon (the URL to wowhead icon)
const ProfessionButton = props => {
    return(

        <Col lg="3" md="4" sm="6">
            <div className='Profession-Button'>
                <img src={props.icon} alt={`${props.name} Icon`} />
                <h5>{props.name}</h5>
            </div>
        </Col>
    )
}

export default ProfessionButton;