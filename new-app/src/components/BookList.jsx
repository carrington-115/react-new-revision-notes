import Book from "./Book";
import { booksCollection } from "../data/books";

function BookList() {
  const getBooks = (id) => {
    const theBook = booksCollection.find((book) => book.id === id);
    console.log(theBook);
  };

  console.log(booksCollection);

  return (
    <div className="book-list-section">
      <h3 className="best-selling-title">Top 3 Best selling Books of 2023</h3>
      <section className="book-list-container">
        {booksCollection.map((item, index) => (
          <Book
            bookUrl={item.bookUrl}
            key={item.id}
            image={item.image}
            title={item.title}
            author={item.author}
            getBooks={getBooks}
            number={index}
          />
        ))}
        {booksCollection.map((book, index) => (
          <Book {...book} getBooks={getBooks} key={book.id} number={index} />
        ))}
      </section>
    </div>
  );
}

export default BookList;
