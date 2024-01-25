import { useRef, useState, useEffect } from "react";
import { formStyle, labelStyle, inputStyle, btnStyle } from "./UsingForms";

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
  );
}
export default ComponenWithUseRef;
