import { combineReducers } from 'redux';
import productReducer from './product/reducers';
import categoryReducer from './category/reducers';
import cartReducer from './cart/reducers'; // ✅

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer, // ✅ make sure this is added!
});

export default rootReducer;
