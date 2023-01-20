import React from "react";
import bottom from "../../../assests/bottom.png";
import cheese from "../../../assests/cheese.png";
import meat from "../../../assests/meat.png";
import salad from "../../../assests/salad.png";
import top from "../../../assests/top.png";
import './Ingredient.css';

const Ingredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bottom":
      ingredient = (
        <div>
          <img src={bottom} alt="bread bottom" />
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div>
          <img src={cheese} alt="cheese" />
        </div>
      );
      break;
    case "meat":
      ingredient = (
        <div>
          <img src={meat} alt="meat" />
        </div>
      );
      break;
    case "salad":
      ingredient = (
        <div>
          <img src={salad} alt="salad" />
        </div>
      );
      break;
    case "top":
      ingredient = (
        <div>
          <img src={top} alt="top" />
        </div>
      );
      break;
    default:
      ingredient = null;
  }

  return( <div className="Ingredient">
    {ingredient}
  </div>
  )
};

export default Ingredient;
