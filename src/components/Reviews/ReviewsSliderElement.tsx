// element in slider for reviews
import React from "react";
import styled from "styled-components";

const ReviewsSliderItemBlock = styled.div`
  width: 27%;
  border: 2px solid grey;
  padding: 10px;
  margin: 10px;
`;
const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 15px 0 5px 0;
`;
const Login = styled.p`
  font-size: 18px;
  margin: 5px 0 5px 0;
`;
const DateTime = styled.p`
  font-size: 14px;
  margin: 2px 0 2px 0;
`;
const Description = styled.p`
  font-size: 18px;
`;
interface IProps {
  name: string;
  login: string;
  datetime: string;
  description: string;
}
const ReviewsSlider = (props: IProps) => {
  const getDateFromString = (datetime:string)=>{
    return datetime.split('T')[0];
  }
  // parse date and time from server
  const getTimeFromString = (datetime:string)=>{
    return datetime.split('T')[1].split(':').slice(0,2).join(':');
  }
  return (
    <ReviewsSliderItemBlock>
      <Name>{props.name}</Name>
      <Login>{props.login}</Login>
      <DateTime>Дата: {getDateFromString(props.datetime)} Время: {getTimeFromString(props.datetime)} </DateTime>
      <Description>{props.description}</Description>
    </ReviewsSliderItemBlock>
  );
};

export default ReviewsSlider;
