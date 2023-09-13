import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">Logo</div>
      </Link>
      <div className="nav-links">Blog Pricing About us</div>
      <div className="buttons">
        <Link to="/login">
          <button className="sign-in">Sign In</button>
        </Link>
        <Link to="/join-us">
          <button className="join-us">Join Us</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
