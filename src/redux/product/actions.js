
import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT_DETAIL,
    FETCH_PRODUCTS_BY_CATEGORY,
    SET_PRODUCTS,
    SET_PRODUCT_DETAIL,
    SET_PRODUCTS_ERROR,
  } from './types';
  
  // Action creators
  export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
  });
  
  export const fetchProductDetail = (id) => ({
    type: FETCH_PRODUCT_DETAIL,
    payload: id,
  });
  

  
  export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
  });
  
  export const setProductDetail = (product) => ({
    type: SET_PRODUCT_DETAIL,
    payload: product,
  });
  
  export const setProductsError = (error) => ({
    type: SET_PRODUCTS_ERROR,
    payload: error,
  });
  





/*
// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL';

// Action Creators
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
});

export const fetchProductDetail = (id) => ({
    type: FETCH_PRODUCT_DETAIL,
    payload: id,
});
*/