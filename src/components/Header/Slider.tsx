import React from "react";
import styled from "styled-components";
import bag1 from '../../assets/imgs/bag1.jpg'
import bag2 from '../../assets/imgs/bag2.jpg'
import bag3 from '../../assets/imgs/bag3.jpg'
import { Link } from "react-router-dom";

const MainTitle = styled.h1`
  color: grey;
  font-size: 32px;
  font-weight: bold;
  margin-left: 10%;
`;
const SliderPanel = styled.div`
  display: flex;
  justify-content: center;
  height: 220px;
  width: 100%;
`;
const SliderElement = styled(Link)`
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
          <SliderElement to={"/goods/1"}>
            {/* id:8 */}
            <img src={"http://213.108.215.19/imgs/"+"red-bag-1.jpeg"} alt="bag1" width="100%" height="100%"/>
          </SliderElement>
          <SliderElement to={"/goods/4"}>
            {/* id:4 */}
          <img src={"http://213.108.215.19/imgs/"+"green-bag-2.jpg"} alt="green-bag-2.jpg" width="100%" height="100%"/>
          </SliderElement>
          <SliderElement to={"/goods/8"}>
            {/* id:8 */}
          <img src={"http://213.108.215.19/imgs/"+"blue-bag-2.jpeg"} alt="bag3" width="100%" height="100%"/>
          </SliderElement>
        </SliderPanel>
    </SliderComponent>
  );
};

export default Slider;
