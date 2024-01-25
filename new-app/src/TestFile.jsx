import { Counter } from "./components/Counter";
import { DisplayPerson } from "./components/DisplayPerson";
import "./assets/styles/testfile.css";
import React, { useState, useEffect } from "react";
import { peopleCollection, peopleCollectionTwo } from "./data/people";

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
      <section>
        <Counter count={count} setCount={setCount} />
        <div>
          {peopleCollectionTwo.map((person) => (
            <DisplayPerson {...person} />
          ))}
        </div>
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
      </section>
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
