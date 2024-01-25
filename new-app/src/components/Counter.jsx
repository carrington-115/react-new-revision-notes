import React from "react";
export function Counter({ count, setCount }) {
  return (
    <section className="countContainer">
      <h3>Count example</h3>
      <h2>{count}</h2>
      <div className="btns">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </section>
  );
}
