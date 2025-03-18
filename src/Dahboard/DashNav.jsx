import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Dahboard/DashStyle/DashNav.css";

function DashNav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const allItems = ["Shirt", "Pants", "Jacket", "Shoes", "Hat", "Sweater", "Gloves"]; // Example items

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter items based on input
    if (value.length > 0) {
      const filteredSuggestions = allItems.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (item) => {
    setSearchTerm(item);
    setSuggestions([]);
  };

  return (
    <nav className="dash-navbar">
      {/* Left Section - Logo */}
      <div className="navbar-left">
        <NavLink to="/dashboard" className="navbar-brand">
          <img src="/path-to-your-logo.png" alt="Shop Logo" className="navbar-logo" />
          <span className="brand-name"> Clothing Shop</span>
        </NavLink>
      </div>

      {/* Center Section - Search Bar */}
      <div className="navbar-center">
        <div className="dash-nav-search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button" aria-label="Search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {suggestions.length > 0 && (
            <ul className="search-suggestions">
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => selectSuggestion(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Right Section - Notifications & Profile */}
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/notifications" className="nav-link">
              <FontAwesomeIcon icon={faBell} className="nav-icon" />
              <span className="nav-text">Notifications</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
              <span className="nav-text">Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DashNav;
