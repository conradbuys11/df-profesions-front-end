import { React } from 'react';
import './ItemButton.css';
import { Link } from 'react-router-dom';

const ItemButton = props => {
    //props - probably item, huh

    return(
        <div className='Item-Button'>
            <Link to={`/items/${props.item.id}`}></Link>
        </div>
    )
}

export default ItemButton;