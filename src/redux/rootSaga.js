import { all } from "redux-saga/effects";
import productSaga from "./product/sagas";
import categorySaga from "./category/sagas";

export default function* rootSaga() {
  yield all([
    productSaga(),
    categorySaga(), 
  ]);
}
