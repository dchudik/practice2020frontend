// !deprecated component
// old functions
import React from "react";
import styled from "styled-components";
// styles for block like div element
const CategoryBlock = styled.div`
  width: 100%;
`;
// input props and types
interface IProps {
  findByType?: (type: string) => void;
}
// component for view category
const CategoryList = (props: IProps) => {
  return (
    <CategoryBlock>
      <h3>
        Тип <input type="checkbox" />
      </h3>
      <p>
        <input type="checkbox" />
        <label>Сумка</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>Рюкзак</label>
      </p>
      <p>
        <input type="checkbox" />
        <label>Портфель</label>
      </p>
    </CategoryBlock>
  );
};

export default CategoryList;
