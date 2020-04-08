import React from "react";
import styled from "styled-components";
interface HrProps {
  size: "big" | "medium" | "small";
}
const PinkBlock = styled.div`
  width: 100%;
  max-width: 100%;
  height: 50%;
  background-color: pink;
  padding: 7% 0 0 15%;
`;
const MainTitle = styled.h1`
  width: 75%;
  color: grey;
  font-size: 52px;
  font-weight: bold;
`;
const Hr = styled.hr<HrProps>`
  margin-left: 0;
  margin-bottom: 30px;
  width: ${(props) =>
    props.size === "big" ? "75%" : props.size === "medium" ? "50%" : "25%"};
`;
const Title = () => {
  return (
    <PinkBlock>
      <MainTitle>Женские и мужские кожанные сумки</MainTitle>
      <Hr size="big" />
      <Hr size="medium" />
      <Hr size="small" />
    </PinkBlock>
  );
};

export default Title;
