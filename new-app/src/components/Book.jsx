import "../assets/styles/book.css";

function Book({ bookUrl, image, title, author, getBooks, number }) {
  console.log(number);
  return (
    <a style={{ position: "relative" }} href="#" className="book-container">
      <img
        src={image}
        id="book-cover-image"
        alt={`A book with title ${title} and author: ${author}`}
      />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <span
        style={{
          fontSize: "24px",
          position: "absolute",
          zIndex: "10",
          color: "white",
          top: 0,
          right: 0,
          padding: "5px",
          backgroundColor: "red",
          borderTopRightRadius: "10px",
        }}
      >
        #{number + 1}
      </span>
      <button className="book-btn" onClick={() => getBooks(title)}>
        Get the book
      </button>
    </a>
  );
}
export default Book;
