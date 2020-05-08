// component for view good in list
import React from "react";
import styled from "styled-components";
import bagImage from "../../assets/imgs/15568.970.jpg";
import { Good } from "../../redux/types/Goods";
import { addGoodInCart } from "../../redux/actions/Goods";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// styles for component
const GoodBlock = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px 10px;
`;
const GoodImg = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 26px;
  margin: 15 0;
`;
const Description = styled.p`
  font-size: 14px;
  width: 75%;
  margin: 0 auto;
`;
const Price = styled.p`
  font-size: 26px;
`;
const ButtonToCart = styled.button`
  border: 2px solid red;
  background-color: transparent;
  padding: 4px 7px;
  font-size: 18px;
  &:hover {
    background-color: red;
    color: white;
    font-weight: bold;
  }
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
// input props with types
interface IProps {
  good: Good;
  addGoodInCart: (good: Good) => void;
}
// functional component for view good
const GoodItem = (props: IProps) => {
  return (
    <GoodBlock>
      <GoodImg>
        {/* get image from nginx */}
        <img
          src={"http://213.108.215.19" + props.good.img}
          alt="bag-img"
          width={"154px"}
          height={"205px"}
        />
      </GoodImg>
      <Title>
        <StyledLink to={"/goods/" + props.good.id}>
          {" "}
          {props.good.title}{" "}
        </StyledLink>{" "}
      </Title>
      <Description>{props.good.description}</Description>
      <Price>Цена: {props.good.price} руб.</Price>
      <ButtonToCart onClick={() => props.addGoodInCart(props.good)}>
        в корзину
      </ButtonToCart>
    </GoodBlock>
  );
};
// connect with redux from dispatch action
// add good in cart
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addGoodInCart: (good: Good) => dispatch(addGoodInCart(good)),
  };
};

export default connect(null, mapDispatchToProps)(GoodItem);
