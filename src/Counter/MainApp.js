import { useState } from "react";
import Meal from "./Meal";
import "./Counter.css";

export default function MainApp() {
  const initialState = [
    { name: "vegetarian", count: 0 },
    { name: "vegan", count: 0 },
    { name: "halal", count: 0 },
    { name: "gluten-free", count: 0 },
    { name: "anything!", count: 0 },
  ];

  const [mealCount, setMealCount] = useState(initialState);

  const handleClick = (name) => {
    setMealCount((prev) =>
      prev.map((meal) => {
        return meal.name === name ? { ...meal, count: meal.count + 1 } : meal;
      })
    );
  };

    const getTotalMeal = () => {
        return mealCount.reduce((total, meal) => {
          return total + meal.count
      }, 0)
  }

    const handleReset = () => {
        setMealCount(initialState)
    }
    
  return (
      <div>
      <h1>Meal Counts</h1>
          
      {mealCount.map((meal) => (
        <Meal name={meal.name} count={meal.count} handleClick={handleClick} />
      ))}
      <div className="total">
        <h2>Total</h2>
        <p>{getTotalMeal()}</p>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
