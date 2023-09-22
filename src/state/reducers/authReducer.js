// authReducer.js
import { SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN } from "../actions/action";

const initialState = {
  authToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload };
    case CLEAR_AUTH_TOKEN:
      return { ...state, authToken: null };
    default:
      return state;
  }
};

export default authReducer;
