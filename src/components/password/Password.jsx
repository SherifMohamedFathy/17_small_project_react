import React, { useState } from "react";
import style from "./style.module.css";
import validator from "validator";

export default function Password() {
  const [passwordValue, setPasswordValue] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageCase, setErrorMessageCase] = useState(false);

  function handlePassword(e) {
    setPasswordValue(e.target.value);
    let validation = validator.isStrongPassword(e.target.value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    });
    setValidPassword(validation);
    if (!validation) {
      setErrorMessage("Password is not strong");
      setErrorMessageCase(true);
    } else {
      setErrorMessage("Nice, password is strong");
      setErrorMessageCase(false);
    }
  }

  return (
    <div className="wrapper text-center pt-5">
      <h2>Checking if password is strong in React JS</h2>
      <div className="input">
        <label className="me-2 fw-bold ">Enter Password: </label>
        <input
          type="text"
          value={passwordValue}
          onChange={handlePassword}
          required
          placeholder="Enter password"
          className={`${validPassword ? style.validInput : style.invalidInput} border-none p-1 outline-none`}
        />
        <p className={errorMessageCase ? style.errorMessage : style.errorMessage2}>{errorMessage}</p>
      </div>
    </div>
  );
}
