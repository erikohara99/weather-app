import React from 'react';

function SearchBar(props) {
    return ( 
        <div id="searchbar">
            <form onSubmit={props.onSubmit}>
                <input id="zipsearch" placeholder="Enter Zip Code"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}

export default SearchBar;