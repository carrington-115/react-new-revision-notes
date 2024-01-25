import { useState, useEffect } from "react";
import { labelStyle, formStyle, inputStyle, btnStyle } from "./UsingForms";

function FormsWithFormDataAPI() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  const handleSubmitFormData = (e) => {
    e.preventDefault();
    console.log(e);
    const formAccess = new FormData(e.currentTarget);
    console.log(formAccess.get("name"));
    const getName = formAccess.get("name");
    const getEmail = formAccess.get("email");
    console.log(getName, getEmail);
    console.log([...formAccess.entries()]);
    console.log(Object.fromEntries(formAccess)); // this turn the array of array to key-value object
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmitFormData} style={formStyle}>
      <label style={labelStyle} htmlFor="name">
        Name
      </label>
      <input style={inputStyle} type="text" name="name" placeholder="Name" />
      <label style={labelStyle} htmlFor="email">
        Email
      </label>
      <input style={inputStyle} type="email" name="email" placeholder="Email" />
      <input style={btnStyle} type="submit" value="Send" />
    </form>
  );
}
export default FormsWithFormDataAPI;
