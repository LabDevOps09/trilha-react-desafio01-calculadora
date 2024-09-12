import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult("Erro");
    }
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="text" value={input} readOnly />
      <h2>Resultado: {result}</h2>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
