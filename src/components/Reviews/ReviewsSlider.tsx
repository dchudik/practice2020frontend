import React from "react";
import styled from "styled-components";
import ReviewsSliderElement from "./ReviewsSliderElement";
import { Review } from "../../redux/types/Reviews";

const ReviewsSliderBlock = styled.div`
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
interface IProps {
  reviews: Review[];
}
const ReviewsSlider = (props: IProps) => {
  return (
    <ReviewsSliderBlock>
      {props.reviews.map((review: Review, index: number) => (
        <ReviewsSliderElement
          name={review.user.name}
          login={review.user.login}
          description={review.text}
          datetime={review.datetime}
        />
      ))}
    </ReviewsSliderBlock>
  );
};

export default ReviewsSlider;
