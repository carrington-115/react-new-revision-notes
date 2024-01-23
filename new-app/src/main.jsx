import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// using the React hook to create components
// function Greetings() {
//   return React.createElement("h2", {}, "hello world");
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Greetings /> */}
  </React.StrictMode>
);
