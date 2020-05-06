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
import { Review, ReviewsActions, ADD_NEW_REVIEWS } from "../types/Reviews";
import axios from 'axios';
// import { Cookies } from 'js-cookie';

const URL: string = "http://localhost:8080";

export const AddReviews = (reviews: Review[]): ReviewsActions => ({
  type: ADD_NEW_REVIEWS,
  payload: reviews,
});

const fetchGetReviews = async () => {
  let reviews = [];
  try {
    const response = await fetch(URL + "/reviews", { method: "GET" });
    console.log(response);
    const json = await response.json();
    console.log(json);
    reviews = json;
  } catch {
    console.log("Fetch error");
  }
  return reviews;
};
export const thunkGetReviews = (): any => async (dispatch: any) => {
  const reviews = await fetchGetReviews();
  dispatch(AddReviews(reviews));
};
const fetchAddNewReview = async (text: string) => {
  try {
    const response = await fetch(URL + "/reviews", 
    {
      method: "POST",
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
      credentials: "include",
      body: JSON.stringify({ text }),
    }
    // {JSON.stringify({ text })},
    // {withCredentials:true}
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json
  } catch {
    console.log("Fetch error");
  }
};
export const thunkAddNewReview = (text: string): any => async (
  dispatch: any
) => {
  const reviews = await fetchAddNewReview(text);
  if(reviews.message == "success")
    alert("Отзыв был успешно добавлен")
  console.log(reviews);
  dispatch(AddReviews([]));
};
