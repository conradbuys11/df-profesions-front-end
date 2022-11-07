import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './RecipePage.css';

const RecipePage = props => {

    // props: URL

    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        let fetching = true;
        fetch(`${props.URL}/recipes/${id}`)
        .then(res => res.json())
        .then(data => {
            if(fetching){
                setRecipe(data);
            }
        })

        return () => {
            fetching = false;
        }
    }, [props.URL, id]);

    // create the html for where we learn this recipe from (trainer, spec, etc.)
    const displayLearnedFromInfo = () => {
        
    }

    /*
    all the info i need to put in:
    profession
    item link & amount crafted
    category, skill up amount, difficulty
    where it is learned (five types - trainer, renown, specialization, other, other w/ specialization)
    required location, notes
    */

    return(
        // if we haven't loaded our info yet, just hit em with some loading text
        recipe.length === 0 ? <h1 className="header-xl">Loading...</h1> :
        (<div className="Recipe-Page">
            <h1 className="header-xl">{recipe.name}</h1>
            <p className="recipe-page-pg">Profession: {<Link to={`/professions/${recipe.profession.name}`}>{recipe.profession.name}</Link>}</p>
            <p className="recipe-page-pg">Crafts <Link to={`/items/${recipe.item.id}`}>{recipe.item.name}</Link> x{recipe.numberCrafted}.</p>
            <p><span>Category:</span> {recipe.category}</p>
            {recipe.difficulty ? <p><span>Difficulty:</span> {recipe.difficulty}</p> : <></>}

        </div>)
    )
}

export default RecipePage;