export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_ITEM = 'ADD_ITEM';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});


export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
  });