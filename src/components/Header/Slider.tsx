import React from "react";
import styled from "styled-components";
import bag1 from '../../assets/imgs/bag1.jpg'
import bag2 from '../../assets/imgs/bag2.jpg'
import bag3 from '../../assets/imgs/bag3.jpg'

const MainTitle = styled.h1`
  color: grey;
  font-size: 32px;
  font-weight: bold;
  margin-left: 10%;
`;
const SliderPanel = styled.div`
  display: flex;
  justify-content: center;
  height: 180px;
  width: 100%;
`;
const SliderElement = styled.div`
  width: 25%;
  padding: 0 5px;
`;
const SliderComponent = styled.div`
  height: 40%;
`;
const Slider = () => {
  return (
    <SliderComponent>
        <MainTitle>Новинки 2020</MainTitle>
        <SliderPanel>
          <SliderElement>
            <img src={bag1} alt="bag1" width="100%" height="100%"/>
          </SliderElement>
          <SliderElement>
          <img src={bag2} alt="bag2" width="100%" height="100%"/>
          </SliderElement>
          <SliderElement>
          <img src={bag3} alt="bag3" width="100%" height="100%"/>
          </SliderElement>
        </SliderPanel>
    </SliderComponent>
  );
};

export default Slider;
