import React from "react";
import styled from "styled-components";

interface ITitle {
  color?: "red" | "black";
}
const CartItemBlock = styled.div`
  text-align: right;
  height: 40px;
`;
const Title = styled.p<ITitle>`
  margin: 20px 0 0 0;

  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
`;
interface IProps{
  result:number;
}
const Cart = (props:IProps) => {
  return (
    <CartItemBlock>
      <Title>Итог: {props.result} руб.</Title>
    </CartItemBlock>
  );
};

export default Cart;
