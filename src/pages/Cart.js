
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cart/actions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculateTotalPrice = (product) => {
    return (product.price * product.quantity).toFixed(2);
  };

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-outer-card">
      <h2 className="cart-title">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((product) => (
            <div className="cart-item-card" key={product.id}>
              <div className="cart-item-info">
                <img src={product.image} alt={product.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                  <p>Total: ${calculateTotalPrice(product)}</p>
                </div>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecrement(product.id)}
                    disabled={product.quantity <= 1}
                  >
                    –
                 </button>
                  <span className="quantity-count">{product.quantity}</span>
                  <button className="quantity-btn" onClick={() => handleIncrement(product.id)}>
                    +
                  </button>
                </div>

                <button className="remove-btn" onClick={() => handleRemove(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${getCartTotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
