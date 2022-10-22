import React, {useEffect, useState} from 'react';
import './ProfessionButton.css';


//props are name (ie Engineering) and icon (the URL to wowhead icon)
const ProfessionButton = props => {
    return(
        <div>
            <img src={props.icon} alt={`${props.name} Icon`} />
            <h5>{props.name}</h5>
        </div>
    )
}

export default ProfessionButton;