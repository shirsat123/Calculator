import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [state, setState] = useState("");

  const clickHandler = (e) => {
    setState(state.concat(e.target.value));
  };

  const clearScreen = () => {
    setState("");
  };

  const equal = () => {
    setState(eval(state).toString());
  };

  const deletefun = () => {
    setState(state.slice(0, -1));
  };

  return (
    <div className="calc">
      <input type="text" id="input" value={state} />

      <button value="1" onClick={clickHandler} className="button">
        1
      </button>
      <button value="2" onClick={clickHandler} className="button">
        2
      </button>
      <button value="3" onClick={clickHandler} className="button">
        3
      </button>
      <button value="4" onClick={clickHandler} className="button">
        4
      </button>
      <button value="5" onClick={clickHandler} className="button">
        5
      </button>
      <button value="6" onClick={clickHandler} className="button">
        6
      </button>

      <button value="7" onClick={clickHandler} className="button">
        7
      </button>
      <button value="8" onClick={clickHandler} className="button">
        8
      </button>
      <button value="9" onClick={clickHandler} className="button">
        9
      </button>
      <button value="0" onClick={clickHandler} className="button">
        0
      </button>
      <button value="+" onClick={clickHandler} className="button">
        +
      </button>
      <button value="-" onClick={clickHandler} className="button">
        -
      </button>

      <button value="*" onClick={clickHandler} className="button">
        *
      </button>
      <button value="/" onClick={clickHandler} className="button">
        /
      </button>

      <button value="%" onClick={clickHandler} className="button">
        %
      </button>
      <button onClick={deletefun} className="button">
        DE
      </button>
      <button value="" onClick={clearScreen} className="button button1">
        AC
      </button>
      <button value="=" onClick={equal} className="button button1">
        =
      </button>
    </div>
  );
}
