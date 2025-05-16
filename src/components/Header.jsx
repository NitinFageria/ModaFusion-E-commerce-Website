
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = ({ onSearch, onResetFilters }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  const handleHomeClick = () => {
    if (onResetFilters) {
      onResetFilters();
    }
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        <img src="/logo.png" alt="ModaFusion Logo" className="logo-image" />
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
        <span onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</span>
        <a href="/cart">Cart ({cartItems.length})</a>
      </nav>
    </header>
  );
};

export default Header;

