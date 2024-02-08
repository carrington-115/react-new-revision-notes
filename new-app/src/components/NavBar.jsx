import NavLinks from "./NavLinks";
import "../assets/styles/navbar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <section className="logo">
        <h1>CONTEXT API</h1>
      </section>
      <NavLinks />
    </div>
  );
}
export default NavBar;
