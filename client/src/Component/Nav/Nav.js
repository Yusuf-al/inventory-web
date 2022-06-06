import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { BiAlignRight } from "react-icons/bi";
import "./Nav.css";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Nav = () => {
  const [menubar, setMenubar] = useState(false);
  const [user] = useAuthState(auth);
  const navigation = useNavigate();
  const handleSignOut = () => {
    navigation("/");
    signOut(auth);
  };
  const handleMenuBar = () => {
    setMenubar(!menubar);
  };

  const getHome = () => {
    navigation("/");
  };
  return (
    <div className="nav-container">
      <div className="nav-div">
        <div className="nav-logo">
          <img
            src="https://e6.pngbyte.com/pngpicture/320127/png-motorbike-icon-png-Circle-Motorcycle-Icon_thumbnail.png"
            alt=""
          />
          <h1 onClick={getHome} style={{ cursor: "pointer" }}>
            Bike Park
          </h1>
        </div>
        <button onClick={handleMenuBar} className="menu-btn">
          <BiAlignRight />
        </button>
        <div className={menubar ? "mob-nav" : "nav-list"}>
          <NavLink className="link-btn" to="/">
            Home
          </NavLink>
          <NavLink className="link-btn" to="/all-products">
            All Bikes
          </NavLink>
          <NavLink className="link-btn" to="/blog">
            Blog
          </NavLink>
          <NavLink className="link-btn" to="/about-us">
            About Us
          </NavLink>

          {user ? (
            <>
              <NavLink className="link-btn" to="/manage-inventory">
                Manage Product
              </NavLink>
              <a className="link-btn" onClick={handleSignOut}>
                Log out
              </a>
            </>
          ) : (
            <NavLink className="link-btn" to="/login">
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
