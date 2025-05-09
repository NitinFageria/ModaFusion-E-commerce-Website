/*
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart/actions';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  const products = productState?.products || [];
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div>Product not found or still loading...</div>;
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    if (cartItem) {
      dispatch(incrementQuantity(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleRemove = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else if (cartItem && cartItem.quantity === 1) {
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
        <div className="cart-controls">
          {quantity === 0 ? (
            <button className="add-to-cart-btn" onClick={handleAdd}>
              Add to Cart
            </button>
          ) : (
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={handleRemove}
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
    </div>
  );
};

export default ProductDetail;

*/





import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart/actions';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  const products = productState?.products || [];
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div>Product not found or still loading...</div>;
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    if (cartItem) {
      dispatch(incrementQuantity(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleRemove = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else if (cartItem && cartItem.quantity === 1) {
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <div className="product-detail-card">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
        <div className="cart-controls">
          {quantity === 0 ? (
            <button className="add-to-cart-btn" onClick={handleAdd}>
              Add to Cart
            </button>
          ) : (
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={handleRemove}>
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
    </div>
  );
};

export default ProductDetail;
