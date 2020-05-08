// simple reducer for set state in redux for reviews from server
import { GET_GOODS, Good, GoodsActions } from "../types/Goods";
import {Review, ReviewsActions, ADD_NEW_REVIEWS} from '../types/Reviews'

const initialState: Review[] = [];

 const ReviewsReducer = (
  state = initialState,
  action: ReviewsActions
): Review[] => {
  switch (action.type) {
    case ADD_NEW_REVIEWS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default ReviewsReducer;