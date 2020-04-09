import React from "react";
import styled from "styled-components";

interface ITitle {
  color?: "red" | "black";
}
const CartItemBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
`;
const Title = styled.p<ITitle>`
  margin: 20px 0 0 0;

  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
`;
const Price = styled.p`
  font-size: 26px;
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
const Cart = () => {
  return (
    <CartItemBlock>
      <Title>Сумка мужская скорпион</Title>
        <Price>1 280 руб.</Price>
        <Quantity>x1</Quantity>
        <DeleteButton>&times;</DeleteButton>
    </CartItemBlock>
  );
};

export default Cart;
