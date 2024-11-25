import React, { useEffect, useState } from "react";
import style from "./style.module.css";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputData(e) {
    setInputValue(e.target.value);
  }

  function handleAdd() {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }

  function handleDelete(idx) {
    const newItems = items.filter((_, index) => idx !== index);
    setItems(newItems);
  }

  function handleUpdate(index) {
    const updateValue = prompt("Update value", items[index]);
    if (updateValue) {
      const newItems = items.map((item, i) => (index === i ? updateValue : item));
      setItems(newItems);
    }
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredItems = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={`${style.wrapper} text-center pt-5 container`}>
      <h1 className="fw-bold">To Do List</h1>
      <hr className="w-25 m-auto" />
      <div className="body">
        <input
          className={`${style.inputAdd} d-flex w-50 m-auto mt-4 rounded-2 p-2`}
          type="text"
          placeholder="Add item..."
          required
          value={inputValue}
          onChange={handleInputData}
        />
        <input
          type="text"
          onChange={handleSearch}
          className={`${style.search} d-flex w-50 m-auto mt-4 p-2`}
          placeholder="Search by name..."
        />
        <button className={`${style.add} btn btn-dark mt-3 ps-5 pe-5`} onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div>
        {filteredItems.map(({ item, index }) => (
          <div key={index} className="output d-flex justify-content-between w-75 m-auto p-2 rounded-2 mt-3 bg-light">
            <p>{item}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-danger me-2" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className="btn btn-outline-warning" onClick={() => handleUpdate(index)}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
