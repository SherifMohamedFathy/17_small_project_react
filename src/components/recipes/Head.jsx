import React from "react";
import img1 from "./img/food-2085075_1280.png";
import img2 from "./img/spaghetti-1932466_1280.jpg";
import { BrowserRouter, Link } from "react-router-dom";
import style from "./style.module.css";
export default function Head() {
  return (
    <div>
      <div className={`${style.header} p-2 d-flex`}>
        <img src={img1} alt="logo" />
        <ul className={`d-flex justify-space-around w-50`}>
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" className={`${style.link}`}>
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
