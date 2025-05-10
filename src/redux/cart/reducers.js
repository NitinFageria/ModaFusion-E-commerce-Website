
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
  } from './types';
  
  const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const itemInCart = state.items.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
          };
        }
      }
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
  
      case INCREMENT_QUANTITY:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
  
      case DECREMENT_QUANTITY:
        return {
          ...state,
          items: state.items
            .map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  

  
  

  