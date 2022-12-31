import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutFunction = (user, dispatch) => {
  localStorage.clear();
  <Redirect to="/login" />
};
