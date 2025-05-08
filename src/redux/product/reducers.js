import {
    FETCH_PRODUCTS,
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR,
    FETCH_PRODUCT_DETAIL,
    SET_PRODUCT_DETAIL,
  } from './types';
  
  const initialState = {
    products: [],
    productDetail: null, // for detail page
    loading: false,
    error: null,
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          error: null,
        };
      case SET_PRODUCTS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case SET_PRODUCT_DETAIL:
        return {
          ...state,
          productDetail: action.payload,
          error: null,
        };
      default:
        return state;
    }
  }
  
  
  
