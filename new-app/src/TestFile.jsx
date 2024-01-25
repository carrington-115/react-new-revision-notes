import "./assets/styles/testfile.css";
import React, { useState, useEffect } from "react";
import { peopleCollection } from "./data/people";

function TestFile() {
  // console.log(useState(0)); // --> testing the useState hook
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(peopleCollection);
  function removePerson(id) {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  }
  useEffect(() => {
    console.log("hello there"); // run after every re-render
  });

  return (
    <React.Fragment>
      <section className="countContainer">
        <h3>Count example</h3>
        <h2>{count}</h2>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </section>

      {/*<section>
        <p>Displaying people</p>
        <div>
          {people.map((person) => (
            <span key={person.id}>
              name: <h2>{person.people}</h2>
              <p>Nickname: {person.nickname}</p>
              <button
                style={btnStyles}
                type="button"
                onClick={() => removePerson(person.id)}
              >
                Remove person
              </button>
            </span>
          ))}
        </div>
        <button style={btnStyles} type="button" onClick={() => setPeople([])}>
          clear
        </button>
      </section> */}

      <section></section>
    </React.Fragment>
  );
}

const SidEffectLoading = () => {
  return (
    <section>
      <div className="circle"></div>
      <div className="circle">
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default TestFile;
