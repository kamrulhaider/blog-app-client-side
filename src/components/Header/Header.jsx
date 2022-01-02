import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header container-fluid d-flex justify-content-center align-items-center'>
            <div className="headerTitles text-center">
                <p className='headerTitleSm'>Moments and memories keep you alive</p>
                <h1 className='headerTitleLg'>Memory Tile</h1>
            </div>
        </div>
    );
};

export default Header;