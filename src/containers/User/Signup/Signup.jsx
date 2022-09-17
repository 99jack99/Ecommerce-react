import React, { useState, useEffect } from "react";

import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signupWall">
      <div className="leftContainerSign">
        <h2 id="signupText">Want to join us? Just Sign up!</h2>

        <div className="inputContainerSign">
          <input
            placeholder="Name"
            className="inputSign"
            type="name"
            name="name"
            title="name"
          />
          <input
            placeholder="Surname"
            className="inputSign"
            type="surname"
            name="surname"
            title="surname"
          />
          <input
            placeholder="Phone"
            className="inputSign"
            type="Phone"
            name="Phone"
            title="Phone"
          />
          <input
            placeholder="address"
            className="inputSign"
            type="address"
            name="address"
            title="address"
          />
          <input
            placeholder="Email"
            className="inputSign"
            type="email"
            name="email"
            title="email"
          />
          <input
            placeholder="Password"
            className="inputSign"
            type="Password"
            name="Password"
            title="Password"
          />
        </div>

        <div className="wrongSign">
          <div className="msgError"></div>
          <div className="sendSign">Sign up</div>
        </div>
      </div>

      <div className="rightContainerSign"></div>
    </div>
  );
};

export default Signup;
