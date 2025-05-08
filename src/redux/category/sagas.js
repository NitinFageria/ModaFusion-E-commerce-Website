import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CATEGORIES, SET_CATEGORIES, SET_CATEGORIES_ERROR } from './types';
import categoryApi from '../../api/categoryApi';

function* fetchCategoriesSaga() {
  try {
    console.log('Saga: Starting FETCH_CATEGORIES');  // log when saga starts

    const categories = yield call(categoryApi.fetchAll);
    console.log('Saga: Fetched categories from API:', categories);  // log API result

    yield put({ type: SET_CATEGORIES, payload: categories });
    console.log('Saga: Dispatched SET_CATEGORIES with payload:', categories);  // log dispatch

  } catch (error) {
    console.error('Saga: Failed to fetch categories:', error);
    yield put({ type: SET_CATEGORIES_ERROR, payload: error.message });
  }
}

export default function* categorySaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategoriesSaga);
}
