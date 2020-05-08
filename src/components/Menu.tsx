// main menu
import * as React from "react";
import styled from "styled-components";
import loveIcon from "../assets/icons/heart-refresh.png";
import cartIcon from "../assets/icons/buy.png";
import { Link, useLocation } from "react-router-dom";
import { Good } from "../redux/types/Goods";
import { IGoods } from "../redux/reducers/CartReducer";
import { connect } from "react-redux";
import { UserState } from "../redux/reducers/UserReducer";
// create props for menu item
interface ActiveMenu {
  active?: boolean;
}
// create styles for menu element
const MenuItem = styled(Link)<ActiveMenu>`
  width: 10%;
  background-color: ${(props) => (props.active ? "red" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-size: 20px;
  padding-top: 10px;
  padding: 10px 15px;
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
  font-size: 22px;
  margin: 0;
  padding-top: 10px;
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  padding: 5px;
`;
const CountInCart = styled.p`
  position: fixed;
  top: 0px;
  margin-left: 15px;
  color: red;
  font-weight: bold;
  background-color: white;
`;
// props for component
interface IProps {
  cart: IGoods[];
  user: UserState;
}
// menu compnent
const Menu = (props: IProps) => {
  const location = useLocation();
  // hooks for set state active element
  const [catalog, setCatalog] = React.useState(false);
  const [reviews, setReviews] = React.useState(false);
  const [delivery, setDelivery] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [itemsInCart, setItemsInCart] = React.useState(0);
  // disable all elemnts
  const setAllFalse = () => {
    setRegister(false);
    setCatalog(false);
    setDelivery(false);
    setReviews(false);
  };
  // active element
  // by location
  const Activate = () => {
    switch (location.pathname) {
      case "/catalog": {
        setAllFalse();
        setCatalog(true);
        break;
      }
      case "/reviews": {
        setAllFalse();
        setReviews(true);
        break;
      }
      case "/delivery": {
        setAllFalse();
        setDelivery(true);
        break;
      }
      case "/register": {
        setAllFalse();
        setRegister(true);
        break;
      }
      case "/": {
        setAllFalse();
        break;
      }
      case "/cart": {
        setAllFalse();
        break;
      }
    }
  };
  React.useEffect(() => {
    // count element in cart
    Activate();
    let count = 0;
    props.cart.forEach((items: IGoods) => {
      if (items.quantity)
        count =
          parseInt(count.toString()) + parseInt(items.quantity.toString());
      else {
        count++;
      }
    });
    setItemsInCart(count);
  });
  return (
    <Header>
      <Logo to="/">Модники</Logo>
      <MenuItem active={catalog} to="/catalog">
        Каталог
      </MenuItem>
      <MenuItem active={reviews} to="/reviews">
        Отзывы
      </MenuItem>
      <MenuItem active={delivery} to="/delivery">
        Доставка
      </MenuItem>
      {props.user.isAuth ? (
        <MenuItem active={register} to="/">
          {props.user.login}
        </MenuItem>
      ) : (
        <MenuItem active={register} to="/register">
          Регистрация
        </MenuItem>
      )}
      <Telephone>8 (911) 934-12-98</Telephone>
      {props.user.isAuth ? (
        // <Link to="/">
          <Icon>
            <img src={loveIcon} alt="love-icon" width="100%" height="100%" />
          </Icon>
        // </Link>
      ) : (
        <Icon>
          <img src={loveIcon} alt="love-icon" width="100%" height="100%" />
        </Icon>
      )}

      <Icon>
        <Link to="/cart">
          <img src={cartIcon} alt="love-icon" width="100%" height="100%" />
          <CountInCart>x{itemsInCart}</CountInCart>
        </Link>
      </Icon>
    </Header>
  );
};
interface IState {
  cart: IGoods[];
  user: UserState;
}
const mapStateToProps = (state: IState) => {
  return {
    cart: state.cart,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Menu);
