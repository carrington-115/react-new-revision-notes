import { useState } from "react";
import "../assets/styles/navbar.css";

function UserContainer() {
  const [status, setStatus] = useState({ name: "", displayStatus: false });
  const newName = "Mark";

  const handleOnClick = () => {
    setStatus((prev) => {
      return {
        ...prev,
        displayStatus: !prev.displayStatus,
      };
    });
    if (status.displayStatus) {
      setStatus((prev) => {
        return {
          ...prev,
          name: "Mark",
        };
      });
    } else {
      setStatus((prev) => {
        return {
          ...prev,
          name: "",
        };
      });
    }
  };

  return (
    <div className="user-container-section">
      <h3 className="user-status">
        {status.displayStatus && `Hello` + status.name}
      </h3>
      <button onClick={handleOnClick} type="button" className="user-status-btn">
        {status.displayStatus ? "Logout" : "Login"}
      </button>
    </div>
  );
}
export default UserContainer;
