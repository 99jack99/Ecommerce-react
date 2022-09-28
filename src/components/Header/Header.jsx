import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../Containers/User/userSlice";

import { NavLink, useNavigate, Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const credentials = useSelector(userSelector);

  if (!credentials?.token) {
    return (
      <div className="nav">
        <div className="navBox">
          <div className="navLogo">
            <img id="logoImg" src="../../../public/logo/zenlogo-b.png" alt="" />
          </div>
          <div className="navItems">
            <NavLink className="navItem" to="/">
              Home
            </NavLink>

            <NavLink className="navItem" to="/login">
              Login
            </NavLink>

            <NavLink className="navItem" to="/signup">
              Signup
            </NavLink>

            <div className="navItem cartItem">
              <img
                id="cartIcon"
                src="../../../public/icons/bag.png"
                alt="Cart bag"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (credentials.user.rolId === 2) {
    return (
      <div className="nav">
        <div className="navBox">
          <div className="navLogo">
            <img
              id="logoImg"
              src="../../../public/logo/zenlogo-b.png"
              alt="retard"
            />
          </div>
          <div className="navItems">
            <NavLink className="navItem" to="/">
              Home
            </NavLink>
            <NavLink className="navItem" to="/admin">
              Panel
            </NavLink>

            <NavLink className="navItem" to="/profile">
              {credentials.user.name}
            </NavLink>

            <div className="navItem cartItem">
              <img
                id="cartIcon"
                src="../../../public/icons/bag.png"
                alt="Cart bag"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <div className="navBox">
          <div className="navLogo">
            <img
              id="logoImg"
              src="../../../public/logo/zenlogo-b.png"
              alt="retard"
            />
          </div>
          <div className="navItems">
            <NavLink className="navItem" to="/">
              Home
            </NavLink>

            <NavLink className="navItem" to="/profile">
              {credentials.user.name}
            </NavLink>

            <div className="navItem cartItem">
              <img
                id="cartIcon"
                src="../../../public/icons/bag.png"
                alt="Cart bag"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
