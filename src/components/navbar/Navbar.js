import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav>
                <div className="logo">
                    Himalayan Spice Haven
                </div>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About Us</Link></li>
                    <li><Link to={`/menu`}>Menu</Link></li>
                    <li><Link to={`/contact`}>Contact Us</Link></li>
                </ul>
        </nav>
    )
}

export default Navbar;