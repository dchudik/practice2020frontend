import { ADD_GOOD_IN_CART, DELETE_GOOD_FROM_CART,  Good, GoodsActions, INCREMENT_GOOD_IN_CART } from "../types/Goods";

export interface IGoods {
  good: Good;
  quantity: number;
}
const initialState: IGoods[] = [];

const GoodsReducer = (state = initialState, action: GoodsActions): IGoods[] => {
  switch (action.type) {
    case ADD_GOOD_IN_CART: {
      let isFind=false;
      state.forEach((item:IGoods) => {if(item.good.id == action.payload.id){
        isFind=true;
      }});
      if(!isFind)
        return [...state, { good: action.payload, quantity: 1 }];
    }
    case DELETE_GOOD_FROM_CART:{
      let newCart = state.filter((item:IGoods)=>item.good.id !== action.payload)
      return newCart;
    }
    case INCREMENT_GOOD_IN_CART:{
      if(action.payload.qty>0){
      let newState = state.map((item:IGoods)=>{
        if(item.good.id==action.payload.id){
          item.quantity=action.payload.qty;
        }
        return item;
      })
      return newState;
    }
    return state;
    }
    default:
      return state;
  }
};

export default GoodsReducer;
