// main page for cart
import React from "react";
import styled from "styled-components";
import GoodInCart from './GoodInCart';
import ResultSumInCart from './ResultSumInCart';
import { connect } from "react-redux";
import { IGoods } from "../../redux/reducers/CartReducer";
// styles for elements
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
interface IState {
  cart: IGoods[];
}
// functional component
const Cart = (props:IState) => {
  // function for get summ  by all goods
  const getSum = ()=>{
    let sum:number=0;
    props.cart.forEach((item:IGoods)=>{
      sum=sum+item.good.price*item.quantity;
    });
    return sum;
  }
  return (
    <CartBlock>
      <Title>Корзина покупок</Title>
      { props.cart.length == 0 ? (
        <p>В вашей корзине нет предметов</p>
      ):(<div>
        {
        props.cart.map((item:IGoods)=>{
        return <GoodInCart good={item}/>})}
        <Hr />
        <ResultSumInCart result={getSum()} />
        </div>
      )}
    </CartBlock>
  );
};
// connect with redux
const mapStateToProps = (state: IState) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
