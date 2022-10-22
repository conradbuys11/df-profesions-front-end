import React, {useEffect, useState} from 'react'

const Homepage = props => {

    const handleClick = e => {
        console.log("Button clicked.");
    }

    return(
        <div>
            <h2>Pick Your Poison!</h2>
            <button onClick={handleClick}>Learn About DF Professions, Profession Knowledge, & Profession Stats</button>
            <button onClick={handleClick}>List of Professions w/ their recipes</button>
        </div>
    )
}

export default Homepage;