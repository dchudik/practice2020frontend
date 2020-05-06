import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  width: 100%;
`;

const CategoryList = () => {
  const [green, setGreen] = React.useState(true)
  const [red, setRed] = React.useState(true)
  const [blue, setBlue] = React.useState(true)
  const [all, setAll] = React.useState(true)
  const activateAll = (status: boolean)=>{
    setAll(status);
    setGreen(status);
    setRed(status);
    setBlue(status);
  }
  return (
    <CategoryBlock>
      <h3>
        Цвет <input type="checkbox" name="color" value={"all"} onChange={(event:any)=>activateAll(event.target.value)} />
      </h3>
          <p>
            <input type="checkbox" name="color" checked={green} />
            <label>Зеленый</label>
          </p>
          <p>
            <input type="checkbox" name="color" checked={blue} />
            <label>Синий</label>
          </p>
          <p>
            <input type="checkbox" name="color" checked={red} />
            <label>Красный</label>
          </p>
    </CategoryBlock>
  );
};

export default CategoryList;
