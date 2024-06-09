import React from 'react';
import './Aside.css';

const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside-item">Your channel</div>
            <div className="aside-item">History</div>
            <div className="aside-item">Playlists</div>
            <div className="aside-item">Your videos</div>
            <div className="aside-item">Watch Later</div>
            <div className="aside-item">Liked videos</div>
            <hr />
        </aside>
    );
};

export default Aside;
