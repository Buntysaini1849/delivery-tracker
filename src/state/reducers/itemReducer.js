import {ADD_ITEM} from '../actions/action';



const initialState = {
    items: [],
  };
  

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  };



  export default itemReducer;