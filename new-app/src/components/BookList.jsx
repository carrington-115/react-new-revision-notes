import Book from "./Book";
import { booksCollection } from "../data/books";

function BookList() {
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

export default BookList;
