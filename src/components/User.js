import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'

const User = ({user}) => {
    return (
        <Link to="/catalog"  className="user" style={{backgroundColor : user.backgroundColor}}>{user.userName} </Link>
    )   
}

export default User