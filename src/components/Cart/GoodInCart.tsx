// component for item in cart
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  deleteGoodFromCart,
  incrementGoodInCart,
} from "../../redux/actions/Goods";
import { IGoods } from "../../redux/reducers/CartReducer";
import { Dispatch } from "redux";
// props for component
interface IProps {
  good: IGoods;
  deleteGoodFromCart: (id: number) => void;
  incrementGoodInCart: (id: number, qty: number) => void;
}
// styles for component
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
// item in cart like functional coponent
const Cart = (props: IProps) => {
  // use hook for set state count position good
  let [count, setState] = React.useState(1);
  return (
    <CartItemBlock>
      {/* our title */}
      <Title>{props.good.good.title}</Title>
      {/* price for one position good */}
      <Price>{props.good.good.price} руб.</Price>
      {/* quantity */}
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
      {/* calculate price  */}
      <Price>{props.good.good.price*count} руб.</Price>
      <DeleteButton
        onClick={() => props.deleteGoodFromCart(props.good.good.id)}
      >
        &times;
      </DeleteButton>
    </CartItemBlock>
  );
};
// connect with redux for dispatch action
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // action for remove this item from cart 
    deleteGoodFromCart: (id: number) => dispatch(deleteGoodFromCart(id)),
    // action for add this item in cart
    incrementGoodInCart: (id: number, qty: number) =>
      dispatch(incrementGoodInCart(id, qty)),
  };
};
export default connect(null, mapDispatchToProps)(Cart);
