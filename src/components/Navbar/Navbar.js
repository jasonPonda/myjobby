import React, { useState } from "react";
import { /* Link, */ NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
/* import { links } from "./data"; */

const Navbar = () => {
  const [click, setClik] = useState(false);
  const handleClick = () => setClik(!click);
  const closeMenu = () => setClik(false);

  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink to="/" className="logo">
          MYJOBBY
        </NavLink>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* {links.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path} onClick={closeMenu}>
                  {item.title}
                </Link>
              </li>
            );
          })} */}

          <NavLink to="/" onClick={closeMenu} className="nav-item">
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu} className="nav-item">
            Services
          </NavLink>

          <NavLink to="/blog" onClick={closeMenu} className="nav-item">
            Blog
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className="nav-item">
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className="nav-item">
            Contact
          </NavLink>

          <NavLink to="/register" onClick={closeMenu} className="nav-item btn0">
            Register
          </NavLink>

          <NavLink to="/login" onClick={closeMenu} className="nav-item btn1">
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
