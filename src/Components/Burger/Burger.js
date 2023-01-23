import React, { Component } from "react";
import BurgerMain from "./BurgerMain/BurgerMain";
import Controls from "./Controls/Controls";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import Summary from "./Summary/Summary";

const INGREDIENT_PRICE = {
  salad: 20,
  cheese: 40,
  meat: 90,
};

export default class Burger extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "meat", amount: 0 },
      { type: "cheese", amount: 0 },
    ],
    totalPrice: 80,
    ModalOpen: false,
    purchasable: false,
  };
  updatePurchasable = (ingredients) => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);
    this.setState({ purchasable: sum > 0 });
  };
  addIngredientHandler = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    for (let item of ingredients) {
      if (item.type === type) item.amount++;
    }
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchasable(ingredients);
  };
  removeIngredientHandler = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchasable(ingredients);
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <BurgerMain ingredients={this.state.ingredients} />
          <Controls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            price={this.state.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.state.purchasable}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader> Order Summary </ModalHeader>
          <ModalBody>
            <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
            <Summary ingredients={this.state.ingredients} />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleModal}>
              Continue to Checkout
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
