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
    const newNumbers = Array.from({ length: totalNumbers }, () =>
      Math.floor(Math.random() * 10)
    );
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

  const verticalAnimation = (number) => {
    return [3, 4, 5, 7, 9].includes(number);
  };

  const horizontalAnimation = (number) => {
    return [0, 1, 2, 6, 8].includes(number);
  };

  return (
    <div>
      <div className="scary-numbers mt-4">
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`scary-number-container 
            ${
              hoveredIndex !== null &&
              getAdjacentIndexes(hoveredIndex).includes(index)
                ? "hovered"
                : ""
            } 
            ${verticalAnimation(number) ? "vertical-animation" : ""} 
            ${horizontalAnimation(number) ? "horizontal-animation" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className="scary-number">{number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
