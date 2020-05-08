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
// based url
const URL: string = "http://213.108.215.19:8080";
// add review in store from server
export const AddReviews = (reviews: Review[]): ReviewsActions => ({
  type: ADD_NEW_REVIEWS,
  payload: reviews,
});
// request for get reviews from server
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
// create thunk for get reviews
// and dispatch if success response
export const thunkGetReviews = (): any => async (dispatch: any) => {
  const reviews = await fetchGetReviews();
  dispatch(AddReviews(reviews));
};
// add review request
// based on cookie session
// by default it's not support 
// use withCredentials: true
// for auth on server
const fetchAddNewReview = async (text: string) => {
  try {
    const response = await axios.post(URL + "/reviews", 
    { text },
    {
      // method: "POST",
      // headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
      // credentials: "include",
      withCredentials:true,
      headers:{
        'Cache':'no-cache',
        'Cookie':document.cookie
      }
      // body: JSON.stringify({ text }),
    },
    // {JSON.stringify({ text })},
    );
    console.log(response);
    // const json = await response.json();
    // console.log(json);
    return response.data
  } catch {
    console.log("Fetch error");
  }
};
// create thunk for add review
// if succes alert success message
export const thunkAddNewReview = (text: string): any => async (
  dispatch: any
) => {
  const reviews = await fetchAddNewReview(text);
  if(reviews.message == "success")
    alert("Отзыв был успешно добавлен")
  console.log(reviews);
  dispatch(AddReviews([]));
};
