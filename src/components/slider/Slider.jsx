import React, { useState } from "react";
import style from "./styles.module.css";
import { data as initialData } from "./data";
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = initialData.length;

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % length);
  }
  function handlePrev() {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }

  const currentItem = initialData[currentIndex];
  return (
    <div className={style.wrapper}>
      <div className={`${style.box} container pt-5`}>
        <i className={`fa-solid fa-circle-left ${style.left}`} onClick={handlePrev}></i>
        <i className={`fa-solid fa-circle-right ${style.right}`} onClick={handleNext}></i>

        <div className={`${style.box} w-50 text-center m-auto`}>
          <img className={style.img} src={require(`${currentItem.img}`)} alt={currentItem.name} />
          <h4>{currentItem.name}</h4>
          <h5>{currentItem.job}</h5>
          <p className="text-muted">{currentItem.desc}</p>
        </div>
      </div>
    </div>
  );
}
