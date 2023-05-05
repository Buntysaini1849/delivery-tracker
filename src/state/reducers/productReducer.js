  // Import Actions
  import { ADD_PRODUCT} from '../actions/action';



// Define initial state
const initialState = {
    products: [],
  };
  

// Define Reducer

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      default:
        return state;
    }
  };

  


  export default productReducer;