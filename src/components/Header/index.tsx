import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Slider from "./Slider";
import headerImg from "../../assets/imgs/header.jpg";

const HeaderBlock = styled.div`
  /* margin-top: 30px; */
  display: flex;
  height: 100vh;
  justify-content: center;
`;
const LeftBlock = styled.div`
  width: 130%;
  height: 100vh;
`;
const ImgBlock = styled.div`
  width: 70%;
`;
const Header = () => {
  return (
    <HeaderBlock>
      <LeftBlock>
        <Title />
        <Slider />
      </LeftBlock>
      <ImgBlock>
        <img src={headerImg} alt="header-img" height="100%" width="100%"/>
      </ImgBlock>
    </HeaderBlock>
  );
};

export default Header;
