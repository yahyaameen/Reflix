import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = () => {
    return (
        <div id='nav-bar'>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
            </div>
            <h2 className='app-logo'>Reflix</h2>
        </div>
    )   
}

export default NavBar