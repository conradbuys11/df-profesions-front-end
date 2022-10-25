import { React } from 'react';
// import { Link } from 'react-router-dom';
import HomepageWelcome from './HomepageWelcome';
import HomepageWhereToStart from './HomepageWhereToStart';
import './Homepage.css';

const Homepage = props => {

    return(
        <div>
            <div className='Homepage'>
                {/* 
                BIG, BIG, BIG TO-DO
                I NEED BETTER IMAGES FOR BOTH HOMEPAGEWELCOME AND HOMEPAGEWHERETOSTART
                MORE SQUARE-LIKE: CURRENT IMAGES ARE VERY WIDE, BUT NOT TALL AT ALL
                */}

                <HomepageWelcome />
                <HomepageWhereToStart />
            </div>
        </div>
    )
}

export default Homepage;