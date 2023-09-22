export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_BANNER = 'ADD_BANNER';
export const DELETE_BANNER = 'DELETE_BANNER';
// authActions.js
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const clearAuthToken = () => ({
  type: CLEAR_AUTH_TOKEN,
});


export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});


export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
  });


  export const addBanner = (banner) => ({
    type: ADD_BANNER,
    payload: banner,
  });



