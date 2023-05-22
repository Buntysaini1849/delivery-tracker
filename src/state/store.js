import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import itemReducer from './reducers/itemReducer';


const rootReducer = combineReducers(
    productReducer,
    itemReducer,

  );

  const store = configureStore({
    reducer: {
      product: productReducer,
      item: itemReducer,
    }
  });


  

  
  export default store