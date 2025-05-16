import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const AppWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useSelector((state) => state.categories.categories);

  return (
    <>
      <Header
        onSearch={(term) => setSearchQuery(term.toLowerCase())}
        categories={categories}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        onResetFilters={() => setSelectedCategory('')}
      />
      <div className={`page-content ${!isHomePage ? 'with-footer-space' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
