// view one good after click on image or name
import React from "react";
import styled from "styled-components";
//import bagImage from "../assets/imgs/15568.970.jpg";
import { Good } from "../redux/types/Goods";
import { addGoodInCart } from "../redux/actions/Goods";
import { Dispatch } from "redux";
import { connect } from "react-redux";
// create styles
const GoodBlock = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px 10px;
  padding-top: 75px;
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
// create props
interface IProps {
  goods: Good[];
  addGoodInCart: (good: Good) => void;
  match: any;
}
const GoodItem = (props: IProps) => {
  const [isFind, setIsFind] = React.useState(false);
  // default state
  let goodItem: Good = {
      id:1,
      title:'',
      description:'',
      price:0,
      img:'',
      filters:{}
  };
  let isFindElement = false;
  props.goods.forEach((good: Good) => {
    console.log(good.id);
    if (good.id == props.match.params.id) {
      isFindElement = true;
      goodItem = good;
    }
  });
  // if server send info about element
  if (isFindElement) {
    return (
      <GoodBlock>
        <GoodImg>
          <img
            src={"http://213.108.215.19" + goodItem.img}
            alt="bag-img"
            width={"154px"}
            height={"205px"}
          />
        </GoodImg>
        <Title>{goodItem.title}</Title>
        <Description>{goodItem.description}</Description>
        <Price>Цена: {goodItem.price} руб.</Price>
        <ButtonToCart onClick={() => props.addGoodInCart(goodItem)}>
          в корзину
        </ButtonToCart>
      </GoodBlock>
    );
  } else {
    return (
      <GoodBlock>
        <Title>Товар не найден</Title>
      </GoodBlock>
    );
  }
};
interface IState {
  goods: Good[];
  fetchGoods: () => void;
}
// get state about goods from redux 
const mapStateToProps = (state: IState) => {
  return {
    goods: state.goods,
  };
};
// create function for add item in cart
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addGoodInCart: (good: Good) => dispatch(addGoodInCart(good)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodItem);
