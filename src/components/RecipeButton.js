import { React } from 'react';
import './RecipeButton.css';
import Link from 'react-router-dom';

const RecipeButton = props => {
    //props - probably recipe, huh

    return(
        <div className='Recipe-Button'>
            <Link to={`/recipes/${props.recipe.id}`}></Link>
        </div>
    )
}

export default RecipeButton;