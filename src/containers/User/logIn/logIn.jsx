import React, { useState, useEffect } from "react";

import "./Login.scss"


const Login = () => {

    return (
        <div className="loginWall">
            
            <div className="leftContainer">
            </div>

            <div className="rightContainer">

                <h2 id="loginText">LOGIN INTO YOUR ACCOUNT!</h2>

                <input className="inputLogin" placeholder="Email" type="email" name="email" title="email" id="" />
                <input className="inputLogin" placeholder="Password" type="password" name="password" title="password" id="" />

                <h3 id="loginSlogan"> - Being fashioned as you never seen before -</h3>

            </div>

        </div>
    )

}

    


export default Login