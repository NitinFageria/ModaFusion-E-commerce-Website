
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart/actions';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else if (quantity === 1) {
      dispatch(decrementQuantity(product.id)); // this will remove it from cart (reducer handles it)
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
      </Link>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">$ {product.price}</p>
      </div>
      <div className="cart-controls">
        {quantity === 0 ? (
          <button className="add-to-cart-btn" onClick={handleAdd}>
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={handleDecrement}>
              –
            </button>
            <span className="quantity-count">{quantity}</span>
            <button className="quantity-btn" onClick={handleIncrement}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;



