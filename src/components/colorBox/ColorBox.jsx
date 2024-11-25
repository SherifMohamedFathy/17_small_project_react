import React, { useState } from "react";
import style from "./style.module.css";

export default function ColorBox() {
  const initialColors = Array(36)
    .fill(0)
    .map(() => getRandomColor());
  const [colors, setColors] = useState(initialColors);

  function getRandomColor() {
    const randomR = Math.floor(Math.random() * 255);
    const randomG = Math.floor(Math.random() * 255);
    const randomB = Math.floor(Math.random() * 255);
    return `rgb(${randomR},${randomG},${randomB})`;
  }

  function handleChangedColor(idx) {
    const newColors = colors.map((color, index) => (index === idx ? getRandomColor() : color));
    setColors(newColors);
  }

  return (
    <div className={`${style.wrapper} d-flex justify-content-center align-items-center`}>
      {colors.map((color, index) => (
        <p
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => handleChangedColor(index)}
          className={`${style.box} me-1 `}
        ></p>
      ))}
    </div>
  );
}
