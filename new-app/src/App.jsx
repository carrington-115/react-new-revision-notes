import React from "react";
import "./App.css";

function Greetings() {
  return (
    <React.Fragment>
      <h3>Hello there</h3>
      <div>
        <ul>
          <li>
            <a href="">Hello there. new link</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Hello there</h2>
      <Greetings />
    </div>
  );
}

export default App;
