/*
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_PRODUCTS } from '../redux/product/types';
import { FETCH_CATEGORIES } from '../redux/category/types';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const categoryState = useSelector((state) => state.categories);
  const cartItems = useSelector((state) => state.cart.items);

  const { products = [], loading } = productState;
  const { categories = [] } = categoryState;
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
    dispatch({ type: FETCH_CATEGORIES });
  }, [dispatch]);

  const getCartQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="home-container">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
        onClearFilter={() => setSelectedCategory('')}
      />

      {loading ? (
        <div>Loading products...</div>
      ) : filteredProducts && filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const quantity = getCartQuantity(product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            );
          })}
        </div>
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default Home;
*/









import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_PRODUCTS } from '../redux/product/types';
import { FETCH_CATEGORIES } from '../redux/category/types';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const categoryState = useSelector((state) => state.categories);
  const cartItems = useSelector((state) => state.cart.items);

  const { products = [], loading } = productState;
  const { categories = [] } = categoryState;
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
    dispatch({ type: FETCH_CATEGORIES });
  }, [dispatch]);

  const getCartQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="home-container">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
        onClearFilter={() => setSelectedCategory('')}
      />

      {loading ? (
        <div>Loading products...</div>
      ) : filteredProducts && filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const quantity = getCartQuantity(product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            );
          })}
        </div>
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default Home;



