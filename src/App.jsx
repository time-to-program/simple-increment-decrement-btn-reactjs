import React from "react";
import "./App.css";
import IncrementDecrementBtn from "./components/IncrementDecrementBtn";

function App() {
  return (
    <div className="container">
      <IncrementDecrementBtn minValue={10} maxValue={25} />
    </div>
  );
}

export default App;
