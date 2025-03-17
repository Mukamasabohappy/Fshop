import React, { useState } from 'react';
import '../Style/Navbar.css';
import { FaUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="navbar">
                <div className="logo">
                  <h3>Elevate your style with our trendy, comfortable,</h3>
                   <h3>and affordable clothing!</h3>
                   </div>
                <ul className="nav-links">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Men">Men</a></li>
                    <li><a href="/Women">Women</a></li>
                    <li><a href="/Kids">Kids</a></li>
                </ul>
                <div className="nav-actions">
                    <form onSubmit={handleSearch} className="search-form">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="search-btn"><FaSearch /></button>
                    </form>
                    <a href="/Login"><FaUser className="user-icon" /></a>
                </div>
           
        </div>
    );
};

export default Navbar;
