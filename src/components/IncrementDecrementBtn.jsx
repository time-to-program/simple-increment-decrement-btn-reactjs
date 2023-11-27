import React, { useState } from "react";
import "./IncrementDecrementBtn.css";

const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100 }) => {
  // State to manage the count value
  const [count, setCount] = useState(minValue);

  // Function to handle incrementing the counter
  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  // Function to handle decrementing the counter
  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="btn-group">
      <button className="increment-btn" onClick={handleIncrementCounter}>
        <span className="material-symbols-outlined">add</span>
      </button>

      <p>{count}</p>
      
      <button className="decrement-btn" onClick={handleDecrementCounter}>
        <span className="material-symbols-outlined">remove</span>
      </button>
    </div>
  );
};

export default IncrementDecrementBtn;