import React, { useState } from "react";
import validator from "validator";

export default function CreditCard() {
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function validateCreditCard() {
    if (validator.isCreditCard(inputValue)) {
      setValidationMessage("Credit card is valid");
    } else {
      setValidationMessage("Credit card is not valid");
    }
  }

  return (
    <div className="container pt-5 text-center">
      <h1>Validating Credit Card in React JS</h1>
      <label className="fs-4">Enter credit card:</label>
      <input onChange={handleInputChange} type="text" value={inputValue} className="p-1 ms-2" />
      <button onClick={validateCreditCard} className="btn btn-primary ms-2">
        Validate
      </button>
      {validationMessage && <p>{validationMessage}</p>}
    </div>
  );
}
