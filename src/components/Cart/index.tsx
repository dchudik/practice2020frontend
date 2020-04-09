import React from "react";
import styled from "styled-components";
import GoodInCart from './GoodInCart';
import ResultSumInCart from './ResultSumInCart';

interface ITitle {
  color?: "red" | "black";
}
const CartBlock = styled.div`
  margin-top: 80px;
  margin: 80px 5% 0px 5%;
  min-height: 77vh;
`;
const Title = styled.p<ITitle>`
  margin: 20px 0 0 0;

  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
`;
const Hr = styled.hr`
    margin: 20px 0;
`;
const Cart = () => {
  return (
    <CartBlock>
      <Title>Корзина покупок</Title>
        <GoodInCart />
        <Hr />
        <ResultSumInCart />
    </CartBlock>
  );
};

export default Cart;
