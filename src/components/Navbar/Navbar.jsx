import { FaBars } from "react-icons/fa";
import "./Navbar.scss";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <a href="/" className="navbar__logo" onClick={() => setshowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>
        <div className={`navbar__flex ${showNav ? "show-nav" : ""}`}>
          <ul className="navbar__links">
            <li onClick={() => setshowNav(false)}>Home</li>
            <li onClick={() => setshowNav(false)}>About Us</li>
            <li onClick={() => setshowNav(false)}>Menu</li>
            <li onClick={() => setshowNav(false)}>Blog</li>
          </ul>
          <button className="button-outline" onClick={() => setshowNav(false)}>
            Make A Reservation
          </button>
        </div>
        <div
          className={`navbar__menu ${showNav ? "bg-color" : " "}`}
          onClick={() => setshowNav(!showNav)}
        >
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
