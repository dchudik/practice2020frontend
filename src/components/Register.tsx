import React, { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { RegisterUser } from "../redux/types/Users";
import { thunkRegisterNewUser } from "../redux/actions/Users";
import { connect } from "react-redux";
import { UserState } from "../redux/reducers/UserReducer";
import { Redirect, Link } from "react-router-dom";
const MainTitle = styled.h1`
  color: grey;
  font-size: 32px;
  text-align: center;
`;
const RegisterBlock = styled.div`
  padding-top: 70px;
  min-height: 78vh;
  padding-left: 5%;
`;
const Label = styled.label`
  padding-right: 10px;
  color: black;
  font-size: 18px;
  width: 200px;
`;
const InputForm = styled.input`
  border: 1px solid red;
  height: 25px;
  border-radius: 5px;
`;
const Input = styled.input`
  margin-right: 10px;
  margin-left: 10px;
  border: 2px solid red;
  border-radius: 5px;
  background-color: transparent;
  height: 35px;
  font-size: 22px;
`;
const Line = styled.p`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
const Form = styled.form`
  margin: 0 auto;
  width: 450px;
  margin-top: 60px;
`;
const CenterLine = styled.p`
  text-align: center;
`;
interface IProps {
  registerNewUser: (data: RegisterUser) => void;
  user: UserState;
}
const Register = (props: IProps) => {
  console.log(props.user);
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const RegisterUser = (event: SyntheticEvent) => {
    event.preventDefault();
    if (password === repeatPassword) {
      const data: RegisterUser = {
        name,
        surname,
        login,
        email,
        password,
      };
      props.registerNewUser(data);
    } else {
      alert("Введенные пароли не совпадают");
    }
  };
  if (props.user.isAuth) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <RegisterBlock>
        <MainTitle>Зарегистрируйтесь и получите скидку 5%!</MainTitle>
        <Form>
          <CenterLine>Все поля обязательны для заполнения!</CenterLine>
          <Line>
            <Label>Фамилия</Label>
            <InputForm
              type="text"
              onChange={(e: any) => setSurname(e.target.value)}
            />
          </Line>
          <Line>
            <Label>Имя</Label>
            <InputForm
              type="text"
              onChange={(e: any) => setName(e.target.value)}
            />
          </Line>
          <Line>
            <Label>Логин</Label>
            <InputForm
              type="text"
              onChange={(e: any) => setLogin(e.target.value)}
            />
          </Line>
          <Line>
            <Label>Электронная почта</Label>
            <InputForm
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Line>
          <Line>
            <Label>Пароль</Label>
            <InputForm
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Line>
          <Line>
            <Label>Повторите пароль</Label>
            <InputForm
              type="password"
              onChange={(e: any) => setRepeatPassword(e.target.value)}
            />
          </Line>
          <CenterLine>
            <p>Уже есть аккаунт?</p>
            <p><Link to="/login">Войти</Link></p>
          </CenterLine>
          <p style={{ textAlign: "center" }}>
            <Input type="reset" />
            <Input
              type="submit"
              onClick={RegisterUser}
              value={"Зарегистрироваться"}
            />
          </p>
        </Form>
      </RegisterBlock>
    );
  }
};
interface IState {
  user: UserState;
}
const mapStateToProps = (state: IState) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    registerNewUser: (data: RegisterUser) =>
      dispatch(thunkRegisterNewUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
