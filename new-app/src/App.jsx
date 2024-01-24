import React from "react";
import "./App.css";
import BookPurchasingForm from "./components/BookPurchasingForm";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <BookList />
      <section className="form-container">
        <BookPurchasingForm />
      </section>
    </div>
  );
}

export default App;
