import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="color-box">
        <button
          className="btn"
          style={{ background: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="btn"
          style={{ background: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="btn"
          style={{ background: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="btn"
          style={{ background: "brown" }}
          onClick={() => setColor("brown")}
        >
          Brown
        </button>
        <button
          className="btn"
          style={{ background: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="btn"
          style={{ background: "gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default App;
