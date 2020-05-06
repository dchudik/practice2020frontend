import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Good } from "../../redux/types/Goods";
import styled from "styled-components";
import Category from "./Category";
import GoodItem from "./GoodItem";
import { Dispatch } from "redux";
import { thunkGetGoods } from "../../redux/actions/Goods";
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
`;
interface IProps {
  goods: Good[];
  fetchGoods: () => void;
}
const Catalog = (props: IProps) => {
  const [gender, setGender] = React.useState("none");
  const [type, setType] = React.useState("none");
  const [color, setColor] = React.useState("none");
  const [sort, setSort] = React.useState("none");
  useEffect(() => {
    if(props.goods.length==0)
      props.fetchGoods();
    console.log(props.goods);
  }, []);
  // if () return <h3>Загрузка товаров...</h3>;
  // else {
  //   console.log(props.goods);
  const sortByCategory = (): any => {
    let newArray = props.goods.map((good: any): any => {
      if (gender !== "none" && color === "none" && type === "none") {
        if (good.filters.gender.indexOf(gender) != -1) {
          return good;
        }
      }
      if (gender === "none" && color !== "none" && type === "none") {
        if (good.filters.colors.indexOf(color) != -1) {
          return good;
        }
      }
      if (gender === "none" && color === "none" && type !== "none") {
        if (good.filters.typeBag.indexOf(type) != -1) {
          return good;
        }
      }
      if (gender !== "none" && color !== "none" && type === "none") {
        if (
          good.filters.gender.indexOf(gender) != -1 &&
          good.filters.colors.indexOf(color) != -1
        ) {
          return good;
        }
      }
      if (gender !== "none" && color === "none" && type !== "none") {
        if (
          good.filters.gender.indexOf(gender) != -1 &&
          good.filters.typeBag.indexOf(type) != -1
        ) {
          return good;
        }
      }
      if (gender === "none" && color !== "none" && type !== "none") {
        if (
          good.filters.colors.indexOf(color) != -1 &&
          good.filters.typeBag.indexOf(type) != -1
        ) {
          return good;
        }
      }
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
const mapStateToProps = (state: IState) => {
  return {
    goods: state.goods,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchGoods: () => dispatch(thunkGetGoods()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
