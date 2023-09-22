import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import itemReducer from './reducers/itemReducer';
import bannerReducer from './reducers/bannerReducer';
import authReducer from './reducers/authReducer';


const rootReducer = combineReducers(
    productReducer,
    itemReducer,
    bannerReducer,
    authReducer,
  );

  const store = configureStore({
    reducer: {
      product: productReducer,
      item: itemReducer,
      banner:bannerReducer,
      loginauth: authReducer,
    }

  });


  

  
  export default store