/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const AppContent = ({ searchQuery, handleSearch }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className={`page-content ${!isHomePage ? 'with-footer-space' : ''}`}>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (term) => {
    setSearchQuery(term.toLowerCase());
  };

  return (
    <Router>
      <AppContent searchQuery={searchQuery} handleSearch={handleSearch} />
    </Router>
  );
};

export default App;
*/





import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import CategoryFilter from './components/CategoryFilter'; // Import this if not already
import './App.css';

const AppContent = ({ searchQuery, handleSearch, showFilters, toggleFilters }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header onSearch={handleSearch} onToggleFilters={toggleFilters} />
      <div className={`page-content ${!isHomePage ? 'with-footer-space' : ''}`}>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} showFilters={showFilters} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (term) => {
    setSearchQuery(term.toLowerCase());
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <Router>
      <AppContent
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
      />
    </Router>
  );
};

export default App;
