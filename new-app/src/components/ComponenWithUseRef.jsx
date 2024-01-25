import { useRef } from "react";
import { formStyle, labelStyle, inputStyle, btnStyle } from "./UsingForms";

function ComponenWithUseRef() {
  const nameRef = useRef(null);

  function handleSubmitData(e) {
    e.preventDefault();
    console.log("name: ", nameRef.current.value);
  }
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
