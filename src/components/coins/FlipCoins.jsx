import React, { useState } from "react";
import style from "./style.module.css";
import img1 from "./imgs/gold-coin-2269848_1280.jpg";
import img2 from "./imgs/gold-coin-2269849_1280.jpg";
export default function FlipCoins() {
  let imgs = [img1, img2];
  const [currentImage, setCurrentImage] = useState("");
  const [numberOfFlip, setNumberOfFlip] = useState(0);
  const [numberOfTail, setNumberOfTail] = useState(0);
  const [numberOfHead, setNumberOfHead] = useState(0);

  function handleFlip() {
    let randomIndex = Math.floor(Math.random() * imgs.length);
    let randomImage = imgs[randomIndex];
    setCurrentImage(randomImage);
    setNumberOfFlip((prev) => prev + 1);

    if (randomIndex === 0) {
      setNumberOfHead((prev) => prev + 1);
    } else if (randomIndex === 1) {
      setNumberOfTail((prev) => prev + 1);
    }

    console.log(randomImage);
  }

  return (
    <div className="wrapper container text-center pt-5">
      <h1>Let's Flip A Coin</h1>
      <div className="imgs w-100">
        {currentImage && <img className=" mb-4 d-flex m-auto text-center" src={`${currentImage}`} alt="coin" />}
      </div>
      <button onClick={handleFlip}>Flip Coin</button>
      <div className="output pt-3">
        <h3>
          out of <span>{numberOfFlip}</span> flips , there have been <span>{numberOfHead}</span> heads and
          <span> {numberOfTail}</span> tail
        </h3>
      </div>
    </div>
  );
}
