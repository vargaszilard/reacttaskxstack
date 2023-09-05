import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="nav-links">Blog Pricing About us</div>
      <div className="buttons">
        <button className="sign-in">Sign In</button>
        <button className="join-us">Join Us</button>
      </div>
    </header>
  );
}

export default Header;
