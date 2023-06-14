export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_BANNER = 'ADD_BANNER';
export const DELETE_BANNER = 'DELETE_BANNER';

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



