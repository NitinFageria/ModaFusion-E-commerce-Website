
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_PRODUCTS } from '../redux/product/types';
import { FETCH_CATEGORIES } from '../redux/category/types';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import './Home.css';

const Home = ({ searchQuery, selectedCategory, setSelectedCategory, categories }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
    dispatch({ type: FETCH_CATEGORIES });
  }, [dispatch]);

  const getCartQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const filteredProducts = productState.products.filter((product) => {
    const matchesCategory =
      selectedCategory && selectedCategory !== 'all'
        ? product.category === selectedCategory
        : true;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-container">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
        onClearFilter={() => setSelectedCategory('')}
      />

      {productState.loading ? (
        <div>Loading products...</div>
      ) : filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getCartQuantity(product.id)}
            />
          ))}
        </div>
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default Home;
