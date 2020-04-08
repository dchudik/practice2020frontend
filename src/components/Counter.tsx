import React from "react";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: grey;
  font-size: 32px;
`;
const CounterBlock = styled.div`
  text-align: center;
`;
const Counter = () => {
  return (
    <CounterBlock>
      <MainTitle>
        В данный момент 239 человек выбирают товар, присоединяйтесь!
      </MainTitle>
    </CounterBlock>
  );
};

export default Counter;
