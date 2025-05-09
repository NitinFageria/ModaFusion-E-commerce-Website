/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart/actions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <div>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
*/






/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart/actions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
    // If quantity is 1, do nothing (or you can choose to remove it if you want)
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
*/




import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart/actions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{calculateTotal()}</h3>
    </div>
  );
};

export default Cart;