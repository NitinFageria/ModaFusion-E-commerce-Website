import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUCTS, FETCH_PRODUCT_DETAIL, SET_PRODUCTS, SET_PRODUCT_DETAIL, SET_PRODUCTS_ERROR } from './types';
import productApi from '../../api/productApi';

function* fetchProductsSaga() {
  try {
    const products = yield call(productApi.fetchAll);
    yield put({ type: SET_PRODUCTS, payload: products });
  } catch (error) {
    console.error('Failed to fetch products:', error);
    yield put({ type: SET_PRODUCTS_ERROR, payload: error.message });
  }
}

function* fetchProductDetailSaga(action) {
  try {
    const product = yield call(productApi.fetchById, action.payload);
    yield put({ type: SET_PRODUCT_DETAIL, payload: product });
  } catch (error) {
    console.error('Failed to fetch product detail:', error);
    yield put({ type: SET_PRODUCTS_ERROR, payload: error.message });
  }
}

export default function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
  yield takeLatest(FETCH_PRODUCT_DETAIL, fetchProductDetailSaga);
}






