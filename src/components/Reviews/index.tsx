// review page
import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewsSlider from "./ReviewsSlider";
import { thunkGetReviews } from "../../redux/actions/Reviews";
import { Dispatch } from "redux";
import { UserState } from "../../redux/reducers/UserReducer";
import { connect } from "react-redux";
import { Review } from "../../redux/types/Reviews";
import { Link } from "react-router-dom";
// create styles
const ReviewsBlock = styled.div`
  margin-top: 60px;
  min-height: 77vh;
`;
const Title = styled.h3`
  font-size: 26px;
  margin-left: 5%;
`;
const AddReview = styled.button`
  color: white;
  background-color: red;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 3px;
  border-color: red;
  margin-left: 5%;
`;
const StyledLink = styled(Link)``;
// create props
interface IProps {
  user: UserState;
  reviews: Review[];
  GetNewReviews: () => void;
}
const Reviews = (props: IProps) => {
  // get reviews from server
  // when component mount
  useEffect(() => {
    props.GetNewReviews();
  }, []);
  return (
    <ReviewsBlock>
      <Title>Отзывы наших клиентов:</Title>
      <StyledLink to={"/reviews/new"}>
        <AddReview>Добавить свой отзыв</AddReview>
      </StyledLink>
      <ReviewsSlider
        reviews={props.reviews}
        // names={[
        //   "Дмитрий Чудинов",
        //   "Галко Максим",
        //   "Диана Метуренко",
        //   "Паша Поплавский",
        //   "Маша Смирнова",
        // ]}
        // descriptions={[
        //   "Сумка для ноутбука пришла во время и в отличном состоянии!!",
        //   "Заказал рюкзак как подарок, пришёл вовремя, подарок очень понравился!",
        //   "Выбрала сумочку, курьер доставил домой, всё супер!!",
        //   "Заказал сумку, что бы переносить документы, очень рад! Цена порадовала, дешевле, чем у конкурентов!",
        //   "Заказала сыну рюкзак, пришёл в день, в который обещали, сын доволен рюкзаком, будем всей семьей носить!))",
        // ]}
      />
      {/* <Title>Отзывы наших поставщиков:</Title>
      <ReviewsSlider
        names={["Максим Брикоткин", "Грибченко Никита", "Митронина Янина"]}
        descriptions={[
          "Рад работать с Вашим магазином, отбираю только лучший товар для ваших клиентов!",
          "Рад являться самым  крупным поставщиком этого магазина, работники и владелец отличные ребята!",
          "Занимаюсь созданием сумок ручной работы, мои работы можете найти в каталоге!",
        ]}
      /> */}
    </ReviewsBlock>
  );
};
interface IState {
  user: UserState;
  reviews: Review[];
}
const mapStateToProps = (state: IState) => {
  return {
    user: state.user,
    reviews: state.reviews,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    GetNewReviews: () => dispatch(thunkGetReviews()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
