import React from "react";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: red;
  font-size: 26px;
  font-weight: bold;

`;
const MenuItem = styled.div`
  margin: 5px 0px;
`;
const MenuComponent = styled.div`
  text-align: center;
`;
const Menu = () => {
  return (
    <MenuComponent>
        <MainTitle>Модничек</MainTitle>
        <MenuItem>Сертификаты</MenuItem>
        <MenuItem>Каталог</MenuItem>
        <MenuItem>Адреса магазинов</MenuItem>
    </MenuComponent>
  );
};

export default Menu;
