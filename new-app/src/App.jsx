import React from "react";
import "./App.css";
import BookPurchasingForm from "./components/BookPurchasingForm";
import BookList from "./components/BookList";
import TestFile from "./TestFile";
import ChallengeFile from "./GithubFetchChallenge";
import MultipleReturnsChallenge from "./MultipleReturnsChallenge";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {/* <BookList />
      <section className="form-container">
        <BookPurchasingForm />
      </section> */}
      <TestFile />
      {/* <ChallengeFile /> */}
      {/* <MultipleReturnsChallenge /> */}
    </div>
  );
}

export default App;
