import React, { useState } from "react";

import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(parseFloat(eval(input)));
      } catch (error) {
        setResult("Error");
      }
      setInput("");
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "backspace") {
      if (input.length > 0) {
        setInput(input.slice(0, -1));
      }
    } else if (value === "(") {
      setInput(input + "(");
    } else if (value === ")") {
      if (input.includes("(")) {
        setInput(input + ")");
      }
    } else if (value === ".") {
      // Allow multiple decimal points
      setInput(input + value);
      // Prevent consecutive decimal points
      if (input.includes(".") && input.slice(-1) === ".") {
        setInput(input.slice(0, -1));
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div>
        <h1>Calculator</h1>
      </div>

      <div className="calculator-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="0"
        />
      </div>

      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>x</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("(")}>(</button>
        <button onClick={() => handleButtonClick(")")}>)</button>

        <button onClick={() => handleButtonClick("/")}>÷</button>
        <button className="c-button" onClick={() => handleButtonClick("C")}>
          C
        </button>

        <button onClick={() => handleButtonClick("backspace")}>←</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
      <div className="calculator-result">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;
