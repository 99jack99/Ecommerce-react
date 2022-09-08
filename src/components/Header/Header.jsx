import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    
    <div className="nav">
        <div className="navBox">
            <div className="navLogo">Z E N</div>
            <div className="navItems">
                <div className="navItem">Log In</div>
                <div className="navItem">Sign up</div>
                <div className="navItem">
                  [cart]
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
