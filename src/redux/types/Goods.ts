export const GET_GOODS = 'GET_GOODS';
export const ADD_GOOD_IN_CART = 'ADD_GOOD_IN_CART';
export const DELETE_GOOD_FROM_CART = 'DELETE_GOOD_FROM_CART';
export const INCREMENT_GOOD_IN_CART = 'INCREMENT_GOOD_IN_CART';

export interface Good{
    id: number;
    title: string;
    description: string;
    price: number;
    sale?: number;
    img: string;
    filters: Object | null;
}

interface GetGoodsAction{
    type: typeof GET_GOODS;
    payload: Good[]
}

interface AddGoodInCartAction{
    type: typeof ADD_GOOD_IN_CART;
    payload: Good
}
interface DelGoodFromCartAction{
    type: typeof DELETE_GOOD_FROM_CART;
    payload: number
}
interface IPayload{
    id:number;
    qty:number;
}
interface IncrementGoodInCart {
    type: typeof INCREMENT_GOOD_IN_CART;
    payload: IPayload;
}
export type GoodsActions = GetGoodsAction | AddGoodInCartAction | DelGoodFromCartAction | IncrementGoodInCart;