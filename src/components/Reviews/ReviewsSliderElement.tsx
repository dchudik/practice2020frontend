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
`;
const Description = styled.p`
  font-size: 14px;
`;
const ReviewsSlider = () => {
  return (
    <ReviewsSliderItemBlock>
      <Name>Чудинов Дмитрий</Name>
      <Description>
        Заказал сумку для ноутбука на этом сайте, пришла быстро. Сумка в хорошем
        качестве, заказом доволен! Обязательно закажу ещё!
      </Description>
    </ReviewsSliderItemBlock>
  );
};

export default ReviewsSlider;
