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
const URL: string = "http://213.108.215.19:8080";
export const getGoods = (goods: Good[]): GoodsActions => ({
  type: GET_GOODS,
  payload: goods,
});

export const addGoodInCart = (good: Good): GoodsActions => ({
  type: ADD_GOOD_IN_CART,
  payload: good,
});
export const deleteGoodFromCart = (id: number): GoodsActions => ({
  type: DELETE_GOOD_FROM_CART,
  payload: id,
});
export const incrementGoodInCart = (id: number, qty: number): GoodsActions => ({
  type: INCREMENT_GOOD_IN_CART,
  payload: { id, qty },
});
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
export const thunkGetGoods = (): any => async (dispatch: any) => {
  const goods = await fetchGetGoods();
  dispatch(getGoods(goods));
};
