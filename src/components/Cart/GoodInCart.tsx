import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  deleteGoodFromCart,
  incrementGoodInCart,
} from "../../redux/actions/Goods";
import { IGoods } from "../../redux/reducers/CartReducer";
import { Dispatch } from "redux";
interface IProps {
  good: IGoods;
  deleteGoodFromCart: (id: number) => void;
  incrementGoodInCart: (id: number, qty: number) => void;
}
interface ITitle {
  color?: "red" | "black";
}
const CartItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;
const Title = styled.p<ITitle>`
  margin: 20px 0 0 0;
  width: 350px;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
`;
const Price = styled.p`
  font-size: 26px;
  width: 150px;
`;
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  font-size: 28px;
  width: 40px;
  /* height: 30px; */
  padding: 2px 6px;
  border: none;
`;
const Quantity = styled.p`
  font-size: 26px;
`;
const Cart = (props: IProps) => {
  let [count, setState] = React.useState(1);
  return (
    <CartItemBlock>
      <Title>{props.good.good.title}</Title>
      <Price>{props.good.good.price} руб.</Price>
      <Quantity>
        x
        <input
          type="number"
          onChange={(event: any) => {
            props.incrementGoodInCart(props.good.good.id, event.target.value);
            if(event.target.value>0)
              setState(event.target.value);
          }}
          style={{
            width:'50px',
          }}
          value={props.good.quantity}
        />
      </Quantity>
      <Price>{props.good.good.price*count} руб.</Price>
      <DeleteButton
        onClick={() => props.deleteGoodFromCart(props.good.good.id)}
      >
        &times;
      </DeleteButton>
    </CartItemBlock>
  );
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteGoodFromCart: (id: number) => dispatch(deleteGoodFromCart(id)),
    incrementGoodInCart: (id: number, qty: number) =>
      dispatch(incrementGoodInCart(id, qty)),
  };
};
export default connect(null, mapDispatchToProps)(Cart);
