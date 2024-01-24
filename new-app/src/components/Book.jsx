import "../assets/styles/book.css";

function Book({ bookUrl, image, title, author }) {
  function handleBookClick() {
    alert(`Book name: ${title}, by ${author}; link: ${bookUrl}`);
  }

  return (
    <a onClick={handleBookClick} href="" className="book-container">
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
