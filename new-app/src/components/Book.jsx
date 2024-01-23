import "../assets/styles/book.css";

function Book({ bookUrl, image, title, author }) {
  return (
    <a href={bookUrl} className="book-container">
      <img
        src={image}
        id="book-cover-image"
        alt={`A book with title ${title} and author: ${author}`}
      />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
    </a>
  );
}
export default Book;
