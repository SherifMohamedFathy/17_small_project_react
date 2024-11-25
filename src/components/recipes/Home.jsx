import React from "react";
import img1 from "./img/food-2085075_1280.png";
import img2 from "./img/spaghetti-1932466_1280.jpg";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="text-center">
        <div className={`${style.landing}`}>
          <div className={`${style.cover}`}>
            <div className={`${style.overlay}`}>
              <h2>AMAZING RECIPES</h2>
              <Link to={"/recipes"}>
                <button>SEARCH RECIPE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
