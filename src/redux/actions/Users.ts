import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GET_GOODS,
  ADD_GOOD_IN_CART,
  GoodsActions,
  Good,
} from "../types/Goods";
import {
  AuthUser,
  RegisterUser,
  RegisterResponse,
  UserActions,
  REGISTER,
  AUTH,
} from "../types/Users";
import { RootState } from "../store";
import axios from 'axios';
// based url
const URL: string = "http://213.108.215.19:8080";
// action for register
export const registerNewUser = (data: RegisterResponse): UserActions => ({
  type: REGISTER,
  payload: data,
});
// fetch on server with json params
const fetchRegisterUser = async (data: RegisterUser) => {
  try {
    const response = await fetch(URL + "/register", {
      method:"POST",
      headers: { 'Content-Type': 'application/json' }, 
      // body: 
      // withCredentials: true,
      credentials: "include",
      body: JSON.stringify(data),
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch(e) {
    console.log(e)
    console.log("Fetch error");
  }
};
// create thunk for dispatch from component
// and validate response from server 
// and alert message for user
export const thunkRegisterNewUser = (data: RegisterUser): any => async (
  dispatch: any
) => {
  const userResult = await fetchRegisterUser(data);
  console.log(userResult);
  if (userResult.message == "success") dispatch(registerNewUser(userResult));
  else if (userResult.message == "Email already used")
    alert("Такой email уже используется");
  else if (userResult.message == "Login already used")
    alert("Такой лоигн уже используется");
};
// action for auth
export const AuthUserAction = (data: RegisterResponse): UserActions => ({
  type: AUTH,
  payload: data,
});
// create fetch for request
const fetchAuthUser = async (data: AuthUser) => {
  try {
    const response = await fetch(URL + "/login",
    {
      method: "POST",
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
      credentials: "include",
      body: JSON.stringify(data),
    });
    console.log(response);

    const json = await response.json();
    console.log(json);
    return json;
  } catch {
    console.log("Fetch error");
  }
};
// create thunk for dispatch from component
// and if message success auth new user
export const thunkAuthUser = (data: AuthUser): any => async (dispatch: any) => {
  const userResult = await fetchAuthUser(data);

  console.log(userResult);
  if (userResult.message == "success") dispatch(AuthUserAction(userResult));
  else
    alert("Логин или пароль не верны")
};
