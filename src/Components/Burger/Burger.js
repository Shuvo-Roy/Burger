import React, { Component } from "react";
import BurgerMain from "./BurgerMain/BurgerMain";
import Controls from "./Controls/Controls";
export default class Burger extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "meat", amount: 0 },
      { type: "cheese", amount: 0 },
    ],
  };

  addIngredientHandler = (type) => {
    const ingredients=[...this.state.ingredients];
    for(let item of ingredients){
      if(item.type===type) item.amount++;
    }
    this.setState({ingredients:ingredients})
  };
  removeIngredientHandler = (type) => {
    const ingredients=[...this.state.ingredients];
    for(let item of ingredients){
      if(item.type===type){
        if(item.amount <= 0) return;
         item.amount--;
        }
    }
    this.setState({ingredients:ingredients})
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <BurgerMain ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </div>
    );
  }
}
