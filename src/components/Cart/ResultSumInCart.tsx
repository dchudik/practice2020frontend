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
const Cart = () => {
  return (
    <CartItemBlock>
      <Title>Итог: 1 280 руб.</Title>
    </CartItemBlock>
  );
};

export default Cart;
