import {ADD_BANNER} from '../actions/action';


const initialState = {
    banners: [],
  };
  

  const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BANNER:
        return {
          ...state,
          banners: [...state.banners, action.payload],
        };
      default:
        return state;
    }
  };



  export default bannerReducer;