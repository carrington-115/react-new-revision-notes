import "../assets/styles/book.css";

function Book({ bookUrl, image, title, author, handleBookClick, getBooks }) {
  return (
    <a onClick={handleBookClick} href="#" className="book-container">
      <img
        src={image}
        id="book-cover-image"
        alt={`A book with title ${title} and author: ${author}`}
      />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <button className="book-btn" onClick={() => getBooks(title)}>
        Get the book
      </button>
    </a>
  );
}
export default Book;
