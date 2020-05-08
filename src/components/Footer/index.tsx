// main component for footer
// collect form and menu for views
import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Menu from "./Menu";

const FooterBlock = styled.div`
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: pink;
`;
const Footer = () => {
  return (
    <FooterBlock>
        <Menu />
        <Form />
    </FooterBlock>
  );
};

export default Footer;
