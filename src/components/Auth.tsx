import React, { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { RegisterUser, AuthUser } from "../redux/types/Users";
import { thunkRegisterNewUser, thunkAuthUser } from "../redux/actions/Users";
import { connect } from "react-redux";
import { UserState } from "../redux/reducers/UserReducer";
import { Redirect } from "react-router-dom";
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
    AuthNewUser: (data: AuthUser) => void;
  user: UserState;
}
const Login = (props: IProps) => {
  console.log(props.user);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const RegisterUser = (event: SyntheticEvent) => {
    event.preventDefault();
    const data :AuthUser = {
        login,
        password
    }
    props.AuthNewUser(data)
  };
  if (props.user.isAuth) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <RegisterBlock>
        <Form>
          <CenterLine>Все поля обязательны для заполнения!</CenterLine>
          <Line>
            <Label>Логин</Label>
            <InputForm
              type="text"
              onChange={(e: any) => setLogin(e.target.value)}
            />
          </Line>
          <Line>
            <Label>Пароль</Label>
            <InputForm
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Line>
          <p style={{ textAlign: "center" }}>
            <Input type="reset" />
            <Input
              type="submit"
              onClick={RegisterUser}
              value={"Войти"}
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
    AuthNewUser: (data: AuthUser) =>
      dispatch(thunkAuthUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
