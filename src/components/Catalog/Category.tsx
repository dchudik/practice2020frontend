import React from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const CategoryBlock = styled.div`
  border-color: red;
  border: 2px solid red;
  padding: 10px 20px;
  width: 14%;
`;
const FindButton = styled.button`
    font-size: 22px;
    width: 100%;
    padding: 5px 0px;
    margin-top: 20px;
    text-align: center;
    border: 3px solid red;
    border-radius: 5px;
    background-color: transparent;
    font-weight: bold;
`;
const Category = () => {
  return (
    <CategoryBlock>
      <p>
        <input type="radio" />
        <label>Мужской</label>
      </p>
      <p>
        <input type="radio" />
        <label>Женский</label>
      </p>
      <CategoryList />
      <CategoryList />
      <h3>Сортировать</h3>
      <select name="sort" id="sort">
        <option value="popularity">По популярности</option>
        <option value="price-min">По убыванию</option>
        <option value="price-max">По возрастанию</option>
      </select>
      <FindButton>Найти</FindButton>
    </CategoryBlock>
  );
};

export default Category;
