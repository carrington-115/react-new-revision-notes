import React from "react";
import "./App.css";
import Book from "./components/Book";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import BookPurchasingForm from "./components/BookPurchasingForm";

const booksCollection = [
  {
    bookUrl: "amazon.in",
    image: image1,
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    bookUrl: "amazon.in",
    image: image2,
    title: "IKIGAI",
    author: "Hector Garcia and Francesc Miralles",
  },
  {
    bookUrl: "amazon.in",
    image: image3,
    title: "The Power of Your Succonscious MIND",
    author: "Joseph Murphy",
  },
];

function BookList() {
  function handleBookClick(title, author, bookUrl) {
    // alert(`Book name: ${title}, by ${author}; link: ${bookUrl}`);
  }

  const getBooks = (title) => {
    const theBook = booksCollection.find((book) => book.title === title);
    console.log(theBook);
  };

  return (
    <div className="book-list-section">
      <h3 className="best-selling-title">Top 3 Best selling Books of 2023</h3>
      <section className="book-list-container">
        {booksCollection.map((item, index) => (
          <Book
            handleBookClick={handleBookClick}
            key={index}
            bookUrl={item.bookUrl}
            image={item.image}
            title={item.title}
            author={item.author}
            getBooks={getBooks}
          />
        ))}
        {booksCollection.map((book, index) => (
          <Book {...book} key={index} getBooks={getBooks} />
        ))}
      </section>
    </div>
  );
}

// function SearchBook() {
//   return (
//     <section className="search-book">
//       <div className="search-section">

//       </div>
//     </section>
//   )
// }

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
