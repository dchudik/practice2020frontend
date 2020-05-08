// main component for goods
// collect views and filter our goods
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Good } from "../../redux/types/Goods";
import styled from "styled-components";
import Category from "./Category";
import GoodItem from "./GoodItem";
import { Dispatch } from "redux";
import { thunkGetGoods } from "../../redux/actions/Goods";
// create styles 
const CatalogBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 55px;
  padding-left: 5%;
`;
const StyledGoodItem = styled.div`
  width: 40%;
  margin: 0 10px;
`;
const GoodItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;// props with types for get from redux
interface IProps {
  //get goods from redux
  goods: Good[];
  //function for get goods from servers
  fetchGoods: () => void;
}
const Catalog = (props: IProps) => {
  // set default state for each element in filters
  const [gender, setGender] = React.useState("none");
  const [type, setType] = React.useState("none");
  const [color, setColor] = React.useState("none");
  const [sort, setSort] = React.useState("none");
  // compoennt did mount in functional style
  // if we haven't got goods, we get goods from server
  useEffect(() => {
    if(props.goods.length==0)
      props.fetchGoods();
    console.log(props.goods);
  }, []);
  // function for get item by sort
  const sortByCategory = (): any => {
    // we crate new array with map
    let newArray = props.goods.map((good: any): any => {
      // get by gender
      if (gender !== "none" && color === "none" && type === "none") {
        if (good.filters.gender.indexOf(gender) != -1) {
          return good;
        }
      }
      // get by color
      if (gender === "none" && color !== "none" && type === "none") {
        if (good.filters.colors.indexOf(color) != -1) {
          return good;
        }
      }
      // get by type
      if (gender === "none" && color === "none" && type !== "none") {
        if (good.filters.typeBag.indexOf(type) != -1) {
          return good;
        }
      }
      // get by color and gender
      if (gender !== "none" && color !== "none" && type === "none") {
        if (
          good.filters.gender.indexOf(gender) != -1 &&
          good.filters.colors.indexOf(color) != -1
        ) {
          return good;
        }
      }
      // get by gender and type
      if (gender !== "none" && color === "none" && type !== "none") {
        if (
          good.filters.gender.indexOf(gender) != -1 &&
          good.filters.typeBag.indexOf(type) != -1
        ) {
          return good;
        }
      }
      // get by color and type
      if (gender === "none" && color !== "none" && type !== "none") {
        if (
          good.filters.colors.indexOf(color) != -1 &&
          good.filters.typeBag.indexOf(type) != -1
        ) {
          return good;
        }
      }
      // get by gender, color and type
      if (gender !== "none" && color !== "none" && type !== "none") {
        if (
          good.filters.gender.indexOf(gender) != -1 &&
          good.filters.colors.indexOf(color) != -1 &&
          good.filters.typeBag.indexOf(type) != -1
        ) {
          return good;
        }
      }
    });
    return newArray;
  };
  // function for sort goods by price 
  const SortByPriceToMax = (): any => {
    
    let arr = sortByCategory();
    console.log(arr)
    arr.sort();
    return arr;
  };
  const SortByPriceToMin = (): any => {
    let arr = sortByCategory();
    arr.sort();
    arr.reverse();
    return arr;
  };
  return (
    <CatalogBlock>
      {props.goods.length == 0 ? (
        <h3>Загрузка товаров...</h3>
      ) : (
        <React.Fragment>
          <Category
            setGender={setGender}
            gender={gender}
            type={type}
            setType={setType}
            color={color}
            setColor={setColor}
            sort={sort}
            setSort={setSort}
          />
          <GoodItems>
            {props.goods.map((good: any): any => {
              if (gender === "none" && color === "none" && type === "none") {
                return (
                  <StyledGoodItem>
                    <GoodItem
                      good={good}
                      // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                      key={good.id}
                    />
                  </StyledGoodItem>
                );
              } else {
                if (sort === "none") {
                  if (
                    gender !== "none" &&
                    color === "none" &&
                    type === "none"
                  ) {
                    if (good.filters.gender.indexOf(gender) != -1) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                  if (
                    gender === "none" &&
                    color !== "none" &&
                    type === "none"
                  ) {
                    if (good.filters.colors.indexOf(color) != -1) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                  if (
                    gender === "none" &&
                    color === "none" &&
                    type !== "none"
                  ) {
                    if (good.filters.typeBag.indexOf(type) != -1) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                  if (
                    gender !== "none" &&
                    color !== "none" &&
                    type === "none"
                  ) {
                    if (
                      good.filters.gender.indexOf(gender) != -1 &&
                      good.filters.colors.indexOf(color) != -1
                    ) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                  if (
                    gender !== "none" &&
                    color === "none" &&
                    type !== "none"
                  ) {
                    if (
                      good.filters.gender.indexOf(gender) != -1 &&
                      good.filters.typeBag.indexOf(type) != -1
                    ) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                  if (
                    gender === "none" &&
                    color !== "none" &&
                    type !== "none"
                  ) {
                    if (
                      good.filters.colors.indexOf(color) != -1 &&
                      good.filters.typeBag.indexOf(type) != -1
                    ) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                  if (
                    gender !== "none" &&
                    color !== "none" &&
                    type !== "none"
                  ) {
                    if (
                      good.filters.gender.indexOf(gender) != -1 &&
                      good.filters.colors.indexOf(color) != -1 &&
                      good.filters.typeBag.indexOf(type) != -1
                    ) {
                      return (
                        <StyledGoodItem>
                          <GoodItem
                            good={good}
                            // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                            key={good.id}
                          />
                        </StyledGoodItem>
                      );
                    }
                  }
                }
                if (sort === "price-max") {
                  SortByPriceToMax().map((good: any):any => (
                    <StyledGoodItem>
                      <GoodItem
                        good={good}
                        // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                        key={good.id}
                      />
                    </StyledGoodItem>
                  ));
                }
                if (sort === "price-min") {
                  SortByPriceToMin().map((good: any):any => (
                    <StyledGoodItem>
                      <GoodItem
                        good={good}
                        // imgSrc={"http://localhost:80" + "/imgs/good1.jpg"}
                        key={good.id}
                      />
                    </StyledGoodItem>
                  ));
                }
              }
            })}
          </GoodItems>
        </React.Fragment>
      )}
    </CatalogBlock>
  );
  // }
};
interface IGoods {
  goods: Good[];
}
interface IState {
  goods: Good[];
  fetchGoods: () => void;
}
// connect with store
// get goods from redux
const mapStateToProps = (state: IState) => {
  return {
    goods: state.goods,
  };
};
// create function for execute thunk
// get goods from server
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchGoods: () => dispatch(thunkGetGoods()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
