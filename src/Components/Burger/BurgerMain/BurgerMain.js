import React from "react";
import "./BurgerMain.css";
import Ingredient from "../ingredient/Ingredient";

const BurgerMain = (props) => {
  let ingredientArr = props.ingredients.map((item) => {
    let amountArr = [...Array(item.amount).keys()];
    return amountArr.map((_) => {
      return <Ingredient type={item.type} key={Math.random} />;
    });
  }).reduce((arr,element)=>{
    return arr.concat(element);
  },[])
  if(ingredientArr.length ===0){
ingredientArr= <p className="display-6">Please add some food!</p>;
  }
  return (
    <div className="Burger">
      <Ingredient type="top" />
      {ingredientArr}
      <Ingredient type="bottom" />
    </div>
  );
};

export default BurgerMain;
