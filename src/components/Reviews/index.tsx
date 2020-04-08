import React from "react";
import styled from "styled-components";
import ReviewsSlider from './ReviewsSlider';

const ReviewsBlock = styled.div`
  margin-top: 60px;
`;
const Title = styled.h3`
    font-size: 26px;
    margin-left: 5%;
`;
const Reviews = () => {
  return (
    <ReviewsBlock>
        <Title>Отзывы наших клиентов:</Title>
        <ReviewsSlider />
        <Title>Отзывы наших поставщиков:</Title>
        <ReviewsSlider />
    </ReviewsBlock>
  );
};

export default Reviews;
