import { useRef, useState, useEffect } from "react";
import { formStyle, labelStyle, inputStyle, btnStyle } from "./UsingForms";
import { useToggle } from "../hooks/useToggle";

function ComponenWithUseRef() {
  const nameRef = useRef(null);
  const isMounted = useRef(false);
  const [count, setCount] = useState(0);

  function handleSubmitData(e) {
    e.preventDefault();
    console.log("name: ", nameRef.current.value);
    e.currentTarget.reset();
  }

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmitData}>
        <label style={labelStyle} htmlFor="name">
          Name
        </label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          ref={nameRef}
        />
        <input type="submit" style={btnStyle} value="send" />
      </form>

      <ToggleComponent />
    </div>
  );
}

const ToggleComponent = () => {
  const [currentToggle, setToggle] = useToggle();
  return (
    <section>
      <p>Toggle</p>
      <button onClick={setToggle} style={btnStyle}>
        Toggle
      </button>
      <span>{currentToggle && <h2>The toggle state is true</h2>}</span>
    </section>
  );
};
export default ComponenWithUseRef;
