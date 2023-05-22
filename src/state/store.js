import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import itemReducer from './reducers/itemReducer';
import usernameReducer from './reducers/usernameReducer';

const rootReducer = combineReducers(
    productReducer,
    itemReducer,
    usernameReducer,
  );

  const store = configureStore({
    reducer: {
      product: productReducer,
      item: itemReducer,
      username: usernameReducer,
    }
  });


  

  
  export default store