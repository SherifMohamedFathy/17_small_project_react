import React, { useState } from "react";
import style from "./styles.module.css";

import { items as inatilItems } from "./data";
export default function BirthDays() {
  const [items, setItems] = useState(inatilItems);

  function handelDelete(index) {
    let newUsers = items.filter((e, idx) => idx !== index);
    setItems(newUsers);
  }
  return (
    <div className={style.wrapper}>
      <div className={`${style.box} w-50`}>
        <h1>
          <span>{items.length}</span> birthdays today
        </h1>
        <div className={style.users}>
          {items.map((item, index) => (
            <div className={`${style.user} d-flex justify-space-between align-items-center w-100`} key={index}>
              <img className={style.img} src={require(`${item.img}`)} alt={item.name} />

              <div className={`${style.content} text-center`}>
                <h5 className="f-weight-bold">{item.name}</h5>
                <p className="text-muted">{item.year}</p>
              </div>
              <button onClick={() => handelDelete(index)}>{item.btn}</button>
            </div>
          ))}
        </div>
        <button className={style.btnAll} onClick={() => setItems([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}
