/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, incrementQuantity, decrementQuantity } from '../redux/cart/actions';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const cartItem = useSelector((state) =>
    state.cart.items.find((i) => i.id === parseInt(id))
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
      </div>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

*/


import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cart/actions';
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
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    if (quantity > 0) {
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
    </div>
  );
};

export default ProductDetail;





