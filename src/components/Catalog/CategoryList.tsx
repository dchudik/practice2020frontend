import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  width: 100%;
`;
interface IProps {
  findByType?: (type: string) => void;
}
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
