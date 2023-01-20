import React, { Component } from "react";
import BurgerMain from "./BurgerMain/BurgerMain";
import Controls from "./Controls/Controls";


const INGREDIENT_PRICE={
  salad: 20,
  cheese: 40,
  meat: 90,
}


export default class Burger extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "meat", amount: 0 },
      { type: "cheese", amount: 0 },
    ],
    totalPrice:80,
  };

  addIngredientHandler = (type) => {
    const ingredients=[...this.state.ingredients];
    const newPrice= this.state.totalPrice + INGREDIENT_PRICE[type];
    for(let item of ingredients){
      if(item.type===type) item.amount++;
    }
    this.setState({ingredients:ingredients, totalPrice:newPrice})
  };
  removeIngredientHandler = (type) => {
    const ingredients=[...this.state.ingredients];
    const newPrice= this.state.totalPrice - INGREDIENT_PRICE[type];
    for(let item of ingredients){
      if(item.type===type){
        if(item.amount <= 0) return;
         item.amount--;
        }
    }
    this.setState({ingredients:ingredients, totalPrice:newPrice})
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <BurgerMain ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
        />
      </div>
    );
  }
}
