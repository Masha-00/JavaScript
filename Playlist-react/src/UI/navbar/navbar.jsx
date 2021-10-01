import React from "react";
import { Link } from 'react-router-dom';

function SongNavbar() {
    return ( 
        <div className="navbar">
            <Link to="/about">About</Link>
            <Link to="/songs">Songs</Link>
        </div>
    );
}

export default SongNavbar;