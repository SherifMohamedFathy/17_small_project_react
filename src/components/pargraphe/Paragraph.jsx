import React, { useState } from "react";
import { data as initialData } from "./data";

export default function Paragraph() {
  const [data, setData] = useState([]);
  const [numberOfParagraph, setNumberOfParagraph] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleNumber(e) {
    setInputValue(e.target.value);
    setNumberOfParagraph(Number(e.target.value));
  }
  function handleParagraph() {
    if (numberOfParagraph === 0 || numberOfParagraph > 8) {
      setData([]);
      return setErrorMessage("Paragraph should not equal 0 or be more than 8.");
    } else {
      const show = initialData.slice(0, numberOfParagraph);
      setData(show);
      setErrorMessage("");
    }
    setInputValue("");
  }

  return (
    <div className="wrapper text-center pt-5 container">
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <div className="content">
        <span>Paragraphs:</span>
        <input type="number" value={inputValue} onChange={(event) => handleNumber(event)} />
        <button onClick={handleParagraph}>Generate</button>
        {errorMessage ? <p className="text-danger"> {errorMessage}</p> : null}
        <div className="data">
          {data.map((item, index) => (
            <p key={index}>{item.paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
