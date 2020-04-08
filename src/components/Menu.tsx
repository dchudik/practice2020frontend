import * as React from "react";
import styled from "styled-components";
import loveIcon from "../assets/icons/heart-refresh.png";
import cartIcon from "../assets/icons/buy.png";
import { Link } from "react-router-dom";

interface ActiveMenu {
  active?: boolean;
}
const MenuItem = styled(Link)<ActiveMenu>`
  width: 10%;
  background-color: ${(props) => (props.active ? "red" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-size: 22px;
  padding-top: 10px;
  text-decoration: none;
`;
const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background-color: white;
`;
const Logo = styled(Link)`
  font-size: 38px;
  font-weight: bold;
  color: red;
  padding: 2px 10px;
  text-decoration: none;
`;
const Telephone = styled.h3`
  font-weight: bold;
  font-size: 26px;
  margin: 0;
  padding-top: 10px;
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  padding: 5px;
`;

const Menu = () => {
  return (
    <Header>
      <Logo to="/">
        Модники
      </Logo>
      <MenuItem active to="/catalog">
        Каталог
      </MenuItem>
      <MenuItem to="/reviews">Отзывы</MenuItem>
      <MenuItem to="/">Доставка</MenuItem>
      <MenuItem to="/">Контакты</MenuItem>
      <Telephone>8 (911) 934-12-98</Telephone>
      <Icon>
        <img src={loveIcon} alt="love-icon" width="100%" height="100%" />
      </Icon>
      <Icon>
        <img src={cartIcon} alt="love-icon" width="100%" height="100%" />
      </Icon>
    </Header>
  );
};

export default Menu;
