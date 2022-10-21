import React, {useEffect, useState} from 'react'

const Test = props => {
    const [itemId, setItemId] = useState(null);

    const handleChange = e => {
        setItemId(e.target.value);
    }

    return(
        <div className='search-bar'>
            <h2>Search for item by id:</h2>
            <input type="number" onChange={this.handleChange}></input>
            {/* <button onClick={}>Search</button> */}
        </div>
    );
}

export default Test