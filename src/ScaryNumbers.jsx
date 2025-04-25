import React, { useState, useEffect } from "react";
import "./ScaryNumbers.css";

const rows = 40;
const cols = 30;
const totalNumbers = rows * cols;

export default function ScaryNumbers() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    const newNumbers = Array.from({ length: totalNumbers }, () => ({
      value: Math.floor(Math.random() * 10),
      animation: Math.random() > 0.5 ? "vertical" : "horizontal",
    }));
    setNumbers(newNumbers);
  };

  const getAdjacentIndexes = (index) => {
    return [
      index,
      index - cols,
      index + cols,
      index - 1,
      index + 1,
      index - cols - 1,
      index - cols + 1,
      index + cols - 1,
      index + cols + 1,
    ].filter((i) => i >= 0 && i < totalNumbers);
  };

  const verticalAnimation = (numberObj) => numberObj.animation === "vertical";
  const horizontalAnimation = (numberObj) =>
    numberObj.animation === "horizontal";

  return (
    <div>
      <div className="scary-numbers mt-4">
        {numbers.map((numberObj, index) => (
          <div
            key={index}
            className={`scary-number-container 
      ${
        hoveredIndex !== null &&
        getAdjacentIndexes(hoveredIndex).includes(index)
          ? "hovered"
          : ""
      } 
      ${verticalAnimation(numberObj) ? "vertical-animation" : ""} 
      ${horizontalAnimation(numberObj) ? "horizontal-animation" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className="scary-number">{numberObj.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
