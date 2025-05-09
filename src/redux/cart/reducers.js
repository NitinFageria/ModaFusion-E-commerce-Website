/*import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    CLEAR_CART,
  } from './types';
  
  const initialState = {
    items: [],
    total: 0, // note: you might want to compute total dynamically instead
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const item = state.items.find((i) => i.id === action.payload.id);
        if (item) {
          return {
            ...state,
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
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
          items: state.items.filter((i) => i.id !== action.payload),
        };
  
      case INCREMENT_QUANTITY:
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
  
      case DECREMENT_QUANTITY:
        return {
          ...state,
          items: state.items
            .map((i) =>
              i.id === action.payload && i.quantity > 1
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0),
        };
  
      case CLEAR_CART:
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
 */

  



  /*import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './types';

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
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
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
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
  */


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
  
  

  
  

  