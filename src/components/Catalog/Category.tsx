// compoennt for get list of cateries 
import React from "react";
import styled from "styled-components";
// styles
const CategoryBlock = styled.div`
  border-color: red;
  border: 2px solid red;
  padding: 10px 20px;
  width: 16%;
  height: 400px;
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
// types for input props in component
interface  IProps{
  gender: string;
  setGender: (gender:any)=>void;
  type: string;
  setType: (type:any)=>void;
  color: string;
  setColor: (color: any)=>void;
  sort: string;
  setSort: (color: any)=>void;
}
// functional component for view categories
const Category = (props:IProps) => {
  // const [gender, setGender] = React.useState("none");
  return (
    <CategoryBlock>
      <p>
        <input type="radio" name="gender" value="male" onChange={(event:any)=>props.setGender(event.target.value)} />
        <label>Мужской</label>
      </p>
      <p>
        <input type="radio" name="gender" value="female" onChange={(event:any)=>props.setGender(event.target.value)}/>
        <label>Женский</label>
      </p>
      <p>
        <input type="radio" name="gender" checked={props.gender === "none" } value="none" onChange={(event:any)=>props.setGender(event.target.value)}/>
        <label>Не важно</label>
      </p>
      <h3>
        Тип
      </h3>
      <select name="type" id="type" onChange={(event:any)=>props.setType(event.target.value)}>
        <option value="none"  >Не важно</option>
        <option value="womens" >Сумка</option>
        <option value="bag"  >Рюкзак</option>
        <option value="portfolio" >Портфель</option>
      </select>

      <h3>
        Цвет
      </h3>
      <select name="color" id="color" onChange={(event:any)=>props.setColor(event.target.value)}>
        <option value="none"  >Не важно</option>
        <option value="green" >Зеленый</option>
        <option value="red"  >Красный</option>
        <option value="blue" >Синий</option>
      </select>
    </CategoryBlock>
  );
};

export default Category;
