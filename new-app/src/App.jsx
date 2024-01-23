import React from "react";
import "./App.css";
import Book from "./components/Book";
import image from "./assets/images/51-78lFnmbL._SY445_SX342_.jpg";

function BookList() {
  return (
    <div className="book-list-section">
      <h3 className="best-selling-title">Top 3 Best selling Books of 2023</h3>
      <section className="book-list-container">
        <Book
          bookUrl="#"
          image={image}
          title="Atomic Habits"
          author="James Clear"
        />
        <Book
          bookUrl="#"
          image={image}
          title="Atomic Habits"
          author="James Clear"
        />
        <Book
          bookUrl="#"
          image={image}
          title="Atomic Habits"
          author="James Clear"
        />
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

export default App;
