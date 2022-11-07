import { React } from 'react';
import './Basics.css';
import BasicsIntro from './BasicsIntro';
import BasicsInfo from './BasicsInfo';

const Basics = props => {
    return(
        <div className='Basics'>
            <BasicsIntro />
            <BasicsInfo />
        </div>
    )
}

export default Basics;