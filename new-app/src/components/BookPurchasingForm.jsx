import React from "react";

function BookPurchasingForm() {
  const labelStyle = {
    display: "none",
  };

  const handleOnEnterinputData = (e) => {
    alert(e.target.value);
  };

  const handFormsubmission = (e) => {
    e.preventDefault();
    console.log("The form has been submitted");
  };

  const formStyle = {
    width: "50%",
    padding: "20px",
    backgroundColor: "blue",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  };

  const formInputStyles = {
    width: "80%",
    backgroundColor: "white",
    color: "black",
    padding: "5px 20px",
    borderRadius: "5px",
    border: "none",
    fontSize: "20px",
  };

  const formButtonStyle = {
    padding: "5px 10px",
    fontSize: "20px",
    border: "none",
  };
  return (
    <form onSubmit={handFormsubmission} style={formStyle}>
      <label style={labelStyle} for="name">
        Name
      </label>
      <input
        style={formInputStyles}
        type="text"
        onChange={handleOnEnterinputData}
        placeholder="Name"
        name="name"
      />
      <label style={labelStyle} for="email">
        Email
      </label>
      <input
        style={formInputStyles}
        type="email"
        onChange={handleOnEnterinputData}
        placeholder="email"
        name="email"
      />
      <label style={labelStyle} for="password">
        Password
      </label>
      <input
        style={formInputStyles}
        type="password"
        onChange={handleOnEnterinputData}
        placeholder="Password"
        name="password"
      />
      <button style={formButtonStyle} type="submit">
        Submit form
      </button>
    </form>
  );
}
export default BookPurchasingForm;
