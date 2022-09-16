import React, { useState, useEffect } from "react";

import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signupWall">
      <div className="leftContainerSign">
        <h2 id="signupText">Want to join us? Just Sign up!</h2>

        <input
          className="inputSign"
          placeholder="Email"
          type="email"
          name="email"
          title="email"
          id=""
        />

        <input
          className="inputSign"
          placeholder="Password"
          type="password"
          name="password"
          title="password"
          id=""
        />
      </div>

      <div className="rightContainerSign"></div>
    </div>
  );
};

export default Signup;
