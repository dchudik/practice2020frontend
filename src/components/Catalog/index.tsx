import React from "react";
import styled from "styled-components";
import Category from "./Category";
import GoodItem from "./GoodItem";

const CatalogBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 55px;
  
`;
const StyledGoodItem = styled.div`
  width: 22%;
  margin: 0 10px;
`;
const Catalog = () => {
  return (
    <CatalogBlock>
      <Category />
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
      <StyledGoodItem>
        <GoodItem />
      </StyledGoodItem>
    </CatalogBlock>
  );
};

export default Catalog;
