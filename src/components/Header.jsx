/*
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ModaFusion</Link>
      </div>

      <nav className="nav-links">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;

*/




/*
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';
//import logo from '../assets/logo.png'; // adjust the path if you put it in public

const Header = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="ModaFusion Logo" className="logo-image" />
        </Link>
      </div>

      <nav className="nav-links">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
*/






import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';
import './Header.css';

const Header = ({ onSearch, onToggleFilters }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="ModaFusion Logo" className="logo-image" />
        </Link>
      </div>

      <nav className="nav-links">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <div className="hamburger" onClick={onToggleFilters}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;

