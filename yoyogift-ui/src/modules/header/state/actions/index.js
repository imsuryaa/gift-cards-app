import { LOGIN, LOGOUT, FETCH_USER } from "./types";
import axiosWrapper from "../../../../apis/axiosCreate";
export const login = object => {
  return {
    type: LOGIN,
    payload: object
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  };
};

export const createUser = userDetails => async dispatch => {
  await axiosWrapper.post(`/users`, userDetails);
  return true;
};
