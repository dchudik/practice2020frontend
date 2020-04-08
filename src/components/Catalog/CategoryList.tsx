import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  width: 100%;
`;
const CategoryList = () => {
  return (
    <CategoryBlock>
      <h3>
        Цвет <input type="checkbox" />
      </h3>
      <p>
        <input type="checkbox" />
        <label>Зеленый</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>Красный</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>Синий</label>
      </p>
    </CategoryBlock>
  );
};

export default CategoryList;
