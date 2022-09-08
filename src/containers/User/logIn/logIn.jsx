import React, { useState, useEffect } from "react";

import "./Login.scss"


const Login = () => {

    return (
        <div className="loginWall">

            <label className="labelItemLogin">
                Email
            </label>
            <input className="inputItemLogin" type="email" name="email" onChange={updateCredentials} />

            <label className="labelItemLogin">
                Password
            </label>
            <input className="inputItemLogin" type="password" name="password" onChange={updateCredentials} />

            <input className="submitLoginItem" type="submit" value="LOG IN" onClick={() => nosLogea()} />

            <div className="errorMessage">
                {msgError}
            </div>

            <div className="addsign" onClick={() =>navigate("/signup")}>
                Still without DreamFilm? <br /> Register now and get 100 hours free!
            </div>
        </div>
    )

}

    


export default Login