import { combineReducers } from 'redux';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
  checkout: checkoutReducer,
});

export default rootReducer;
