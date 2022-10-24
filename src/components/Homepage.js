import { React } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Homepage.css';

const Homepage = props => {

    const handleClick = e => {
        console.log("Button clicked.");
    }

    return(
        <div>
            <div className='Homepage'>
                <h1>Welcome to Conrad's DF Profession Page - Under Construction</h1>
                <h2>Pick Your Poison!</h2>
                <p><Link to="/basics">Learn About DF Professions, Profession Knowledge, & Profession Stats</Link></p>
                <p><Link to="/professions">List of Professions w/ their recipes</Link></p>
            </div>
        </div>
    )
}

export default Homepage;