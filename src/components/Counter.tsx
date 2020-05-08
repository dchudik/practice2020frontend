// get counter users who view goods
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// create styles
const MainTitle = styled.h1`
  color: grey;
  font-size: 32px;
`;
const CounterBlock = styled.div`
  text-align: center;
  padding-top: 20px;
`;
const Counter = () => {
  const [counter, setCounter] = useState(0);
  // get counter when component mount
  const getCounter = async () => {
    const response = await fetch("http://213.108.215.19:8080/counters");
    const json = await response.json();
    console.log(json);
    setCounter(json.counters);
  };
  useEffect(() => {
    getCounter();
  });
  return (
    <CounterBlock>
      <MainTitle>
        Количество человек которые выбирали товар сегодня: {counter}
        <MainTitle>Присоединяйтесь!</MainTitle>
      </MainTitle>
    </CounterBlock>
  );
};

export default Counter;
