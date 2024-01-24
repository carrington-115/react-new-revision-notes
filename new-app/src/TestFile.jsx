import "./assets/styles/testfile.css";
import React, { useState, useEffect } from "react";

const peopleCollection = [
  { id: 1, people: "Fru", nickname: "Fru-Mark" },
  { id: 2, people: "Fru", nickname: "Fru-Mark" },
  { id: 3, people: "Fru", nickname: "Fru-Mark" },
];

function TestFile() {
  // console.log(useState(0)); // --> testing the useState hook
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(peopleCollection);
  function removePerson(id) {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  }

  // const btnStyles = {
  //   backgroundColor: "black",
  //   color: "yellow",
  //   border: "none",
  //   padding: "5px 10px",
  //   fontSize: "15px",
  // };

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
export default TestFile;
