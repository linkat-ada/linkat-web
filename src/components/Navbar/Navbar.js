import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = ({ head, items, exHead: ex }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="navbar-icon">
          <h1>{head}</h1>
        </div>
      </Link>
      <nav className="nav-menu">
        <ul className="nav-menu-list">
          {items.map((item, index) => (
            <Link key={index} className="link nav-menu-item" to={`/${item}`}>
              <li className="nav-menu-item">{item}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <nav className="nav-menu">
        <ul className="nav-menu-list">
          {ex.map((item, index) => (
            <Link key={index} className="link nav-menu-item" to={`/${item}`}>
              <li className="nav-menu-item">{item}</li>
            </Link>
          ))}
        </ul>
        <CgProfile className="profile-btn" size={"2em"} onClick={()=> setIsClicked(!isClicked)}/>
        {isClicked && <Dropdown />}
      </nav>
    </div>
  );
};

export default Navbar;
