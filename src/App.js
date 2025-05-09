/*import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { FETCH_PRODUCTS } from './redux/product/types';
import { FETCH_CATEGORIES } from './redux/category/types';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
    dispatch({ type: FETCH_CATEGORIES });
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
*/






/*import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { FETCH_PRODUCTS } from './redux/product/types';
import { FETCH_CATEGORIES } from './redux/category/types';

function App() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
    dispatch({ type: FETCH_CATEGORIES });
  }, [dispatch]);

  return (
    <Router>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

*/






import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (term) => {
    setSearchQuery(term.toLowerCase());
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
