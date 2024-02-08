import { useContext, useState } from "react";
import "../assets/styles/navbar.css";
import { navBarContext } from "./NavBar";

function UserContainer() {
  const [status, setStatus] = useState(false);
  const { name } = useContext(navBarContext);
  console.log(name);

  return (
    <div className="user-container-section">
      <h3 className="user-status">{status ? "login" : `Hello ${name}`}</h3>
      <button
        onClick={() => setStatus(!status)}
        type="button"
        className="user-status-btn"
      >
        {status ? "Login" : "Logout"}
      </button>
    </div>
  );
}
export default UserContainer;
