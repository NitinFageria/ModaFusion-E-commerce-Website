import { all } from 'redux-saga/effects';
import productSaga from './product/sagas';
import categorySaga from './category/sagas';
import cartSaga from './cart/sagas'; // if you have cart sagas

export default function* rootSaga() {
  yield all([
    productSaga(),
    categorySaga(),
    cartSaga(), // include this only if you’ve created it
  ]);
}
