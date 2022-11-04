import {React, useState} from "react";
import './SpecializationRecipes.css';

const SpecializationRecipes = props => {

    //props: profession (object), URL, makeRow (method, takes recipe & level learned)
    //mmm i should probably make a "recipestable" component or something. since this repeats a lot of code from TrainerRecipes

    const [recipes, setRecipes] = useState([]);

    return(
        <div className="Specialization-Recipes">

        </div>
    )
}

export default SpecializationRecipes;