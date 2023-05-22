export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_ITEM = 'ADD_ITEM';
export const SET_USERNAME = "SET_USERNAME";


export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});


export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
  });

  export const setUsernames = (username) => ({
    type: 'SET_USERNAME',
    payload: username,
  });

