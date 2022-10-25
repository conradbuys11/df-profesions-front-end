import { React } from 'react';
import { Link } from 'react-router-dom';
import HomepageWelcome from './HomepageWelcome';
import './Homepage.css';

const Homepage = props => {

    return(
        <div>
            <div className='Homepage'>
                <HomepageWelcome />
                <p><Link to="/basics">Learn About DF Professions, Profession Knowledge, & Profession Stats</Link></p>
                <p><Link to="/professions">List of Professions w/ their recipes</Link></p>
            </div>
        </div>
    )
}

export default Homepage;