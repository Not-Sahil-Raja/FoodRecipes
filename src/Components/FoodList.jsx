import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <>
      <ul className=" w-full">
        {foodData.map((food) => (
          <li key={food.id}>
            <FoodItem food={food} setFoodId={setFoodId} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FoodList;
