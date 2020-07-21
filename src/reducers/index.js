import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import alertsReducer from './alertsReducer';
export default combineReducers({
  products: productsReducer,
  alerts: alertsReducer,
});
