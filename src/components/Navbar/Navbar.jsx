import React from 'react';
import '../../components/Nav.css'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-item bg-gray-700 rounded-xl ">Home</div>
            <div className="nav-item">Shorts</div>
            <div className="nav-item">Subscriptions</div>
            <hr/>
        </nav>
    );
};

export default Nav;
