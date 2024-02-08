import React from "react";
import "./App.css";
import BookPurchasingForm from "./components/BookPurchasingForm";
import BookList from "./components/BookList";
import TestFile from "./TestFile";
import ChallengeFile from "./GithubFetchChallenge";
import MultipleReturnsChallenge from "./MultipleReturnsChallenge";
import UsingForms from "./components/UsingForms";
import FormsWithFormDataAPI from "./components/FormsWithFormDataAPI";
import ComponenWithUseRef from "./components/ComponenWithUseRef";
import NavBar from "./components/NavBar";
import { createContext } from "react";

function App() {
  console.log(createContext);
  return (
    <div
      className="App"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavBar />
      {/* <BookList />
      <section className="form-container">
        <BookPurchasingForm />
      </section> */}
      {/* <TestFile /> */}
      {/* <ChallengeFile /> */}
      {/* <MultipleReturnsChallenge /> */}
      {/* <UsingForms /> */}
      {/* <FormsWithFormDataAPI /> */}
      {/* <ComponenWithUseRef /> */}
    </div>
  );
}

export default App;
