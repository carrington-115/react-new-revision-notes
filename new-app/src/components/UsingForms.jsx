import { useEffect, useState } from "react";

function UsingForms() {
  const inputStyle = {
    fontSize: "20px",
    padding: "5px 10px",
    border: "none",
    outline: "none",
    width: "100%",
    color: "black",
    backgroundColor: "white",
  };
  const btnStyle = {
    width: "100%",
    fontSize: "15px",
    color: "white",
    backgroundColor: "#7e0363",
    border: "none",
    padding: "5px 0px",
    cursor: "pointer",
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "15px",
    width: "30vw",
    padding: "20px",
    backgroundColor: "#030103",
  };

  const labelStyle = {
    fontSize: "15px",
    color: "black",
    color: "white",
  };

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleEnterData = (e, setValue) => {
  //     setValue(event.target.value);
  //   };

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    progLanguage: "",
    country: "",
  });
  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const updateCheckedBox = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmitInfo} action="">
        <label style={labelStyle} htmlFor="name">
          Name:
        </label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          value={userInfo.name}
          onChange={handleInputChange}
          aria-label="enter your name"
        />
        <label style={labelStyle} htmlFor="email">
          Email:
        </label>
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleInputChange}
          aria-label="enter your email"
        />
        <label style={labelStyle} htmlFor="password">
          Password
        </label>
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={handleInputChange}
          aria-label="enter your password"
        />
        <fieldset
          style={{
            border: "none",
            width: "100%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            name="progLanguage"
            value="html"
            onChange={updateCheckedBox}
          />
          <label style={labelStyle} htmlFor="progLanguage">
            Programming Language
          </label>
        </fieldset>
        <label style={labelStyle} htmlFor="country">
          Country
        </label>
        <select
          name="country"
          value={userInfo.country}
          onChange={handleInputChange}
        >
          <option value="none">-- None --</option>
          <option value="cm">Cameroon</option>
          <option value="ng">Nigeria</option>
          <option value="sa">South Africa</option>
          <option value="uk">United Kingdom</option>
        </select>
        <input
          style={btnStyle}
          type="submit"
          name="progLanguage"
          value="Login"
        />
      </form>
    </div>
  );
}
export default UsingForms;
