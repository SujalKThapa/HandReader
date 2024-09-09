import React from "react";
import "./Navbar.css"; // Import the CSS for the navbar

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
