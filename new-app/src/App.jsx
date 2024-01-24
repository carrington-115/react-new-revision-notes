import React from "react";
import "./App.css";
import BookPurchasingForm from "./components/BookPurchasingForm";
import BookList from "./components/BookList";
import TestFile from "./TestFile";
import ChallengeFile from "./GithubFetchChallenge";

function App() {
  return (
    <div className="App">
      {/* <BookList />
      <section className="form-container">
        <BookPurchasingForm />
      </section> */}
      {/* <TestFile /> */}
      <ChallengeFile />
    </div>
  );
}

export default App;
