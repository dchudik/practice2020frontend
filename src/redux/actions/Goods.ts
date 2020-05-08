import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GET_GOODS,
  ADD_GOOD_IN_CART,
  GoodsActions,
  Good,
  DELETE_GOOD_FROM_CART,
  INCREMENT_GOOD_IN_CART,
} from "../types/Goods";
import { RootState } from "../store";
// url for request
const URL: string = "http://213.108.215.19:8080";
// action for set goods in store
export const getGoods = (goods: Good[]): GoodsActions => ({
  type: GET_GOODS,
  payload: goods,
});

// action for add good in cart
export const addGoodInCart = (good: Good): GoodsActions => ({
  type: ADD_GOOD_IN_CART,
  payload: good,
});
// delete good from cart
export const deleteGoodFromCart = (id: number): GoodsActions => ({
  type: DELETE_GOOD_FROM_CART,
  payload: id,
});
// increment good in store
export const incrementGoodInCart = (id: number, qty: number): GoodsActions => ({
  type: INCREMENT_GOOD_IN_CART,
  payload: { id, qty },
});
// create fetch request for get goods from server
// based on promises
const fetchGetGoods = async () => {
  let goods = [];
  try {
    const response = await fetch(URL + "/goods/", { method: "GET" });
    console.log(response);
    const json = await response.json();
    console.log(json);
    goods = json.goods;
  } catch {
    console.log("Fetch error");
  }
  return goods;
};
// create thunk for dispatch from component and execute fetch 
// and dispatch set goods from servers in store
export const thunkGetGoods = (): any => async (dispatch: any) => {
  const goods = await fetchGetGoods();
  dispatch(getGoods(goods));
};
