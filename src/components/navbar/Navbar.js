import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    {/* <p>
      <Link to="/about">About</Link>
    </p> */}
    <p>
      <Link to="/events">Events</Link>
    </p>
    <p>
      <Link to="/projects">Projects</Link>
    </p>
    <p>
      <Link to="/team">Team</Link>
    </p>
    <p>
      <Link to="/mentors">Mentors</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="ucsp__navbar">
      <div className="ucsp__navbar-links">
        <div className="ucsp__navbar-links_logo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQFurjQnxyo2Og/company-logo_200_200/0/1565109886767?e=1646265600&v=beta&t=7tRFkO9T7nuFhBhX7LdYOiqTQrxGBH98-_Gtvdclb-A"
            alt="logo"
          />
        </div>
        <div className="ucsp__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ucsp__navbar-sign">
        {/* <p>Sign In</p> */}
        <button type="button">
          <Link to="/register">Join Us</Link>
        </button>
      </div>
      <div className="ucsp__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="ucsp__nav-menu_container scale-up-center">
            <div className="ucsp__navbar-menu_container-links">
              <Menu />
              <div className="ucsp__navbar-menu_container-links-sign">
                <button type="button">
                  <Link to="/register">Join Us</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
