// simple reducer for add new items in store
import { GET_GOODS, Good, GoodsActions } from "../types/Goods";
// init state
const initialState: Good[] = [];

 const GoodsReducer = (
  state = initialState,
  action: GoodsActions
): Good[] => {
  switch (action.type) {
    case GET_GOODS: {
      return [
        ...state,
        ...action.payload
      ];
    }
    default:
      return state;
  }
};

export default GoodsReducer;