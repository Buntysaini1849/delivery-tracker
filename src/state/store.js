import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import itemReducer from './reducers/itemReducer';
import bannerReducer from './reducers/bannerReducer';


const rootReducer = combineReducers(
    productReducer,
    itemReducer,
    bannerReducer,
  );

  const store = configureStore({
    reducer: {
      product: productReducer,
      item: itemReducer,
      banner:bannerReducer,
    }

  });


  

  
  export default store