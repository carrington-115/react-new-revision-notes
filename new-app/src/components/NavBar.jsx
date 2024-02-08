import NavLinks from "./NavLinks";
import "../assets/styles/navbar.css";
import { createContext } from "react";

export const navBarContext = createContext();

function NavBar() {
  const data = {
    name: "Fru Mark",
  };
  return (
    <navBarContext.Provider value={data}>
      <div className="nav-container">
        <section className="logo">
          <h1>CONTEXT API</h1>
        </section>
        <NavLinks />
      </div>
    </navBarContext.Provider>
  );
}
export default NavBar;
