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

const URL: string = "http://213.108.215.19:8080";

export const registerNewUser = (data: RegisterResponse): UserActions => ({
  type: REGISTER,
  payload: data,
});

const fetchRegisterUser = async (data: RegisterUser) => {
  try {
    const response = await fetch(URL + "/register", {
      method:"POST",
      headers: { 'Content-Type': 'application/json' }, 
      // body: 
      // withCredentials: true,
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

export const AuthUserAction = (data: RegisterResponse): UserActions => ({
  type: AUTH,
  payload: data,
});

const fetchAuthUser = async (data: AuthUser) => {
  try {
    const response = await fetch(URL + "/login", {
      method: "POST",
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
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
export const thunkAuthUser = (data: AuthUser): any => async (dispatch: any) => {
  const userResult = await fetchAuthUser(data);

  console.log(userResult);
  if (userResult.message == "success") dispatch(AuthUserAction(userResult));
  else
    alert("Логин или пароль не верны")
};
