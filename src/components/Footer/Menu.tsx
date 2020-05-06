import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainTitle = styled.h1`
  color: red;
  font-size: 26px;
  font-weight: bold;

`;
const MenuItem = styled(Link)`
  margin: 5px 0px;
  color: black;
  text-decoration: none;
`;
const MenuComponent = styled.div`
  text-align: center;
`;
const Menu = () => {
  return (
    <MenuComponent>
        <MainTitle>Модники</MainTitle>
        <p><MenuItem to="/reviews" >Отзывы</MenuItem></p>
        <p><MenuItem to="/catalog" >Каталог</MenuItem></p>
        <p><MenuItem to="/delivery" >Доставка</MenuItem></p>
    </MenuComponent>
  );
};

export default Menu;
