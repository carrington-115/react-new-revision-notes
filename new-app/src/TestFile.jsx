import "./assets/styles/testfile.css";
import React, { useState } from "react";

function TestFile() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <section className="countContainer">
        <h3>Count example</h3>
        <h2>{count}</h2>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </section>
    </React.Fragment>
  );
}
export default TestFile;
