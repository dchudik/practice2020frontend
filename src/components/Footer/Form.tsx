// component for view form
// for get email
import React from "react";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: grey;
  font-size: 22px;
  font-weight: bold;
`;
const FormComponent = styled.div`
  height: 40%;
`;
const Input = styled.input`
  border-color: red;
  margin-right: 15px;
  height: 30px;
`;
const Button = styled.button`
  border-color: red;
  background-color: red;
  color: white;
  font-weight: bold;
  height: 35px;
`;
const Form = () => {
  return (
    <FormComponent>
      <MainTitle>Получи купон на скидку по почте:</MainTitle>
      <form>
        <p>
          <Input type="email" />
          <Button>Отправить</Button>
        </p>
      </form>
    </FormComponent>
  );
};

export default Form;
