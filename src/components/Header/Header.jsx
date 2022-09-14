import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="nav">
      <div className="navBox">
        <div className="navLogo">
          <img id="logoImg" src="../../../public/logo/zenlogo-b.png" alt="retard" />
        </div>
        <div className="navItems">
          <div className="navItem">Log In</div>
          <div className="navItem">Sign up</div>
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
};

export default Header;
