import { SET_USERNAME } from "../actions/action";

const initialState = {
    username:[],
  };


  const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERNAME:
        return { ...state, username: action.payload };
      default:
        return state;
    }
  };
  
  export default usernameReducer;