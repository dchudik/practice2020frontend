import React from "react";
import styled from "styled-components";
import bagImage from '../../assets/imgs/15568.970.jpg';

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
    font-size: 32px;
    margin: 15 0;
`;
const Description = styled.p`
    font-size: 18px;
    width: 75%;
    margin: 0 auto;
`;
const Price = styled.p`
    font-size: 26px;
`;
const GoodItem = () => {
  return (
    <GoodBlock>
        <GoodImg>
            <img src={bagImage} alt="bag-img" width={"100%"} height={"100%"} />
        </GoodImg>
        <Title>Мужской портфель пантера</Title>
        <Description>
            Сумка от дихайнера Елены Брюшко, сделана из натуральной кожи
        </Description>
        <Price>Цена: 2600 руб.</Price>
    </GoodBlock>
  );
};

export default GoodItem;
