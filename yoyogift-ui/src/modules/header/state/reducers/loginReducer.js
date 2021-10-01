import { LOGIN, LOGOUT, FETCH_USER } from "../actions/types";
const user = JSON.parse(window.sessionStorage.getItem("user"))

const INITIAL_STATE = user
  ? {
      loginStatus: true,
      detailsObject: user
    }
  : {
      loginStatus: false,
      detailsObject: {}
    };
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        loginStatus: true,
        detailsObject: action.payload
      };
      break;
    case LOGOUT:
      state = {
        ...state,
        loginStatus: false,
        detailsObject: {}
      };
      break;

    default:
      state = {
        ...state
      };
      break;
  }
  return state;
};

export default loginReducer;
