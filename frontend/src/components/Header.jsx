import React from 'react';
import SearchBar from './SearchBar';

function Header(props) {
    return (
        <div id="header">
            <h1>SkyCheck</h1>
            <SearchBar onSubmit={props.onSubmit}/>
            <div id="links">
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    );
}

export default Header;