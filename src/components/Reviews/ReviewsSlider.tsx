import React from "react";
import styled from "styled-components";
import ReviewsSliderElement from './ReviewsSliderElement';

const ReviewsSliderBlock = styled.div`
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

`;
const ReviewsSlider = () => {
  return (
    <ReviewsSliderBlock>
        <ReviewsSliderElement />
        <ReviewsSliderElement />
        <ReviewsSliderElement />
        <ReviewsSliderElement />
        <ReviewsSliderElement />
    </ReviewsSliderBlock>
  );
};

export default ReviewsSlider;
