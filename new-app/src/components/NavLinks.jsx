import UserContainer from "./UserContainer";
import "../assets/styles/navbar.css";

function NavLinks() {
  return (
    <div className="nav-links-container">
      <nav className="nav-link-container">
        <NavLink name="Home" />
        <NavLink name="About us" />
        <NavLink name="blog" />
        <NavLink name="Contact us" />
      </nav>
      <UserContainer />
    </div>
  );
}

function NavLink({ name }) {
  return (
    <div className="link-container">
      <p>{name}</p>
    </div>
  );
}
export default NavLinks;
