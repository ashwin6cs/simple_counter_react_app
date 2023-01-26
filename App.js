import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App" style={{ marginTop: 50 }}>
      <span style={{ display: "block", marginBottom: 50 }}>
        <button
          style={{ marginRight: 50, padding: 30 }}
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
        <button
          style={{ marginRight: 10, padding: 30 }}
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
      </span>
      <>{value}</>
    </div>
  );
}

export default App;
