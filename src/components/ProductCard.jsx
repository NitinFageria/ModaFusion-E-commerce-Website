/*import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../redux/cart/types';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch({
            type: ADD_TO_CART,
            payload: { ...product, quantity: 1 },
        });
    };

    const handleViewDetail = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
                onClick={handleViewDetail}
                className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
*/




/*
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cart/actions';
import './ProductCard.css';

const ProductCard = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    if (quantity > 0) {
      dispatch(removeFromCart(product.id));
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
            <button
              className={`quantity-btn ${quantity === 0 ? 'disabled' : ''}`}
              onClick={handleRemove}
              disabled={quantity === 0}
            >
              –
            </button>
            <span className="quantity-count">{quantity}</span>
            <button className="quantity-btn" onClick={handleAdd}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

*/



/*import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cart/actions';
import './ProductCard.css';

const ProductCard = ({ product, quantity, onAddToCart }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (quantity > 0) {
      dispatch(removeFromCart(product.id));
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
          <button className="add-to-cart-btn" onClick={onAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button
              className={`quantity-btn ${quantity === 0 ? 'disabled' : ''}`}
              onClick={handleRemove}
              disabled={quantity === 0}
            >
              –
            </button>
            <span className="quantity-count">{quantity}</span>
            <button className="quantity-btn" onClick={onAddToCart}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
*/




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



