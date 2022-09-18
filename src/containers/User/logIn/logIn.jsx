import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userSelector, loginUser} from '../userSlice';

import "./Login.scss"


const Login = props => {

    const [userLogin, setUserLogin] = useState ({
        email:'', 
        password:''
    })  

    const [msgError, setMsgError] = useState("");

    let navegador = useNavigate();
    
    const dispatch = useDispatch();
    const credentials = useSelector(userSelector);

    const updateUserInfoLogin = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    };

    useEffect (()=>{

        if(credentials?.token !== ''){
            navegador("/");
        }
    },[]);

    const login = () => {
       
        if(userLogin.password.length > 2){
            if (! /[\d()+-]/g.test(userLogin.password) ) {
                setMsgError('Please reenter password');
                return;
            };

        }else{
            setMsgError('Password must have at least 4 characters');
            return;
        }
        
        dispatch(loginUser({
            email: userLogin.email,
            password: userLogin.password
        }
        ));

        setTimeout(()=>{
            navegador("/");
        },1000)
    };

    return (
        <div className="loginWall">
            
            <div className="leftContainer">
            </div>

            <div className="rightContainer">

                <h2 id="loginText">LOGIN INTO YOUR ACCOUNT!</h2>

                <input className="inputLogin" placeholder="Email" type="email" name="email" title="email" id="" onChange={updateUserInfoLogin}/>
                <input className="inputLogin" placeholder="Password" type="password" name="password" title="password" id="" onChange={updateUserInfoLogin}/>

                <div className="wrongLogin">
                    <div className="msgError">{msgError}</div>
                    <div className="sendLogin" onClick={()=>login()}>Login</div><br></br>
                </div>

                <h3 id="loginSlogan"> - Being fashioned as you never seen before -</h3>

            </div>

        </div>
    )

}

    


export default Login