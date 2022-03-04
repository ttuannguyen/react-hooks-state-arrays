import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";


function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]; //dot operator to make a copy of foods array and insert each element into a new array
    setFoods(newFoodArray);
  }
  
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)}> 
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>

  ));

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      //iterate through the arr and return a new arr => whatever vaue is returned by the callback function we pass to .map will be added to this new arr
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
          //if the id of food we're iterating over matches the id of food we're updating, return a new food object with the heat level incremented by 1
        };
      } else {
        return food;
      }
    });
    // calling .filter will return a new arr based on which elements match our criteria in the callback function
    setFoods(newFoodArray);
  }



  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );


}


export default SpicyFoodList;
