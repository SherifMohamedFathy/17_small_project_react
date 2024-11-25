import React, { useState } from "react";
import style from "./styles.module.css";
import { data } from "./data";

export default function Cart() {
  const [items, setItems] = useState(data.map((item) => ({ ...item, quantity: 1 })));
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  function calcPrice() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }
  function handleIncrease(index) {
    const newItems = items.map((item, i) => (i === index ? { ...item, quantity: item.quantity + 1 } : item));
    setItems(newItems);
  }

  function handleDecrease(index) {
    const newItems = items.map((item, i) =>
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(newItems);
  }

  return (
    <div className="wrapper">
      <div className="headline bg-info">
        <div className={`${style.head} container d-flex justify-content-between p-3`}>
          <h2>Use Reducer</h2>
          <div className="cart position-relative">
            <i className="fa fa-cart-arrow-down fa-2x text-white" aria-hidden="true"></i>
            <span className={style.number}>{totalItems}</span>
          </div>
        </div>
      </div>
      <div className="body container text-center pt-3">
        <h1>YOUR BAG</h1>
        <div className="items">
          {items.map((element, index) => (
            <div className="content d-flex justify-content-between w-75 m-auto p-2" key={index}>
              <div className="item text-start">
                <h4>{element.name}</h4>
                <p>$ {element.price.toFixed(2)}</p>
                <p className={`${style.link} text-info`}>{element.removeBtn}</p>
              </div>
              <div className="numberElement">
                <i className={`fa fa-arrow-circle-up text-info ${style.up}`} onClick={() => handleIncrease(index)}></i>
                <p>{element.quantity}</p>
                <i
                  className={`fa fa-arrow-circle-down text-info ${style.down}`}
                  onClick={() => handleDecrease(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-info w-75 m-auto" />
        <div className="total d-flex justify-content-between w-75 m-auto">
          <span className="fs-3">Total</span>
          <span className="bg-info p-2 text-white mt-1 border rounded-3">$ {calcPrice()}</span>
        </div>
        <button className={`${style.clear} bg-primary text-white mt-3`} onClick={() => setItems([])}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
