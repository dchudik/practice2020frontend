import React, { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { RegisterUser, AuthUser } from "../redux/types/Users";
import { thunkRegisterNewUser, thunkAuthUser } from "../redux/actions/Users";
import { connect } from "react-redux";
import { UserState } from "../redux/reducers/UserReducer";
import { Redirect, Link } from "react-router-dom";
import { thunkAddNewReview } from "../redux/actions/Reviews";

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
const Area = styled.textarea``;
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
const StyledLink = styled(Link)``;
const AddReview = styled.button`
  color: white;
  background-color: red;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 3px;
  border-color: red;
  margin-left: 5%;
`;
interface IProps {
  AddNewReview: (text: string) => void;
  user: UserState;
  history?: any;
}
const Login = (props: IProps) => {
  console.log(props.user);
  const [text, setText] = useState("");
  const AddNewReview = (event: SyntheticEvent) => {
    event.preventDefault();
    if (text.length > 6) {
      event.preventDefault();
      props.AddNewReview(text);

      // props.history.push("/reviews")
    } else {
      alert("Длина отзыва должна быть больше 6 символов");
    }
  };
  if (!props.user.isAuth) {
    return <Redirect to={"/register"} />;
  } else {
    return (
      <RegisterBlock>
       
        <Form>
        <Link to="/reviews">
          <AddReview>Просмотреть все отзывы</AddReview>
        </Link>
          <Line>
            <Label>Введите содержание отзыва:</Label>
            <Area onChange={(e: any) => setText(e.target.value)} />
          </Line>

          <p style={{ textAlign: "center" }}>
            <Input type="reset" />
            <Input type="submit" value={"Добавить"} onClick={AddNewReview} />
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
    AddNewReview: (text: string) => dispatch(thunkAddNewReview(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
