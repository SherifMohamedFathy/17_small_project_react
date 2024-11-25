import React, { useState } from "react";
import style from "./styles.module.css";
import { data as initialData } from "./data";
export default function Menu() {
  const [data, setData] = useState(initialData);

  function handleFilter(type) {
    if (type === "all") {
      setData(initialData);
    } else {
      const filteredData = initialData.filter((item) => item.type === type);
      setData(filteredData);
    }
  }

  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.box} container pt-5`}>
        <h1 className="text-center">Our Menu</h1>
        <hr className={`${style.hr} text-center`} />
        <div className={`${style.categories}`}>
          <span onClick={() => handleFilter("all")}>All</span>
          <span onClick={() => handleFilter("breakfast")}>Breakfast</span>
          <span onClick={() => handleFilter("lunch")}>Lunch</span>
          <span onClick={() => handleFilter("shakes")}>Shakes</span>
        </div>
        <div className={`${style.items}`}>
          {data.map((item, index) => (
            <div className={`${style.meal}`} key={index}>
              <img className={`${style.image} `} src={require(`${item.image}`)} alt={item.name} />
              <div className={`${style.content}  d-flex justify-content-between p-3 align-items-center w-100`}>
                <h5>{item.name}</h5>
                <span>{item.price}</span>
              </div>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
