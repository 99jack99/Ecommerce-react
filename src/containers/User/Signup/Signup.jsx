import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../userSlice";
import { useNavigate } from "react-router-dom";

import "./Signup.scss";

const Signup = (props) => {
  const dispatch = useDispatch();
  let backhome = useNavigate();
  
  const [msgError, setMsgError] = useState("");

  const [signup, setSignup] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    msgIsError: "",
  });

  const handleInput = (event) => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value
    });
  };

  const CorrectUser = (event) => {
    event.preventDefault();

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        signup.email
      )
    ) {
      setSignup({
        ...signup,
        isError: true,
        msgIsError: "Please, enter a valid email",
      });

      setTimeout(() => {
        setSignup({
          ...signup,
          msgIsError: "",
        });
      }, 1000);
      return;
    }

    if (register.password.length > 5) {
      if (!/[\d()+-]/g.test(signup.password)) {
        setSignup({
          ...signup,
          isError: true,
          msgIsError: "Please, enter a valid password",
        });
        setTimeout(() => {
          setSignup({
            ...signup,
            msgIsError: "",
          });
        }, 1000);
        return;
      }
    } else {
      setSignup({
        ...signup,
        isError: true,
        msgIsError: "Password must have at least 6 characters",
      });
      setTimeout(() => {
        setSignup({
          ...signup,
          msgIsError: "",
        });
      }, 1000);
      return;
    }

    setSignup({
      ...signup,
      isError: false,
      msgIsError: "",
    });

    if (signup.name == "") {
      setMsgError("Name cant be empty!");
      setTimeout(() => {
        setMsgError("");
      }, 1200);
      return;

    } else if (signup.surname == "") {
      setMsgError("Surname cant be empty!");
      setTimeout(() => {
        setMsgError("");
      }, 1000);
      return;

    } else if (signup.phone == "") {
      setMsgError("Phone cant be empty!");
      setTimeout(() => {
        setMsgError("");
      }, 1000);
      return;

    } else if (signup.address == "") {
      setMsgError("Address cant be empty!");
      setTimeout(() => {
        setMsgError("");
      }, 1000);
      return;

    } else if (signup.email == "") {
      setMsgError("Email cant be empty!");
      setTimeout(() => {
        setMsgError("");
      }, 1000);
      return;

    } else if (signup.password == "") {
      setMsgError("Password cant be empty!");
      setTimeout(() => {
        setMsgError("");
      }, 1000);
      return;
    }

    setMsgError("You have been sign up succesfully!");

    dispatch(
      signupUser(signup.name, signup.surname,signup.phone, signup.address, signup.email, signup.password)
    );

    setTimeout(() => {
      backhome("/");
    }, 1000);
  };

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
            onChange={handleInput}
          />
          <input
            placeholder="Surname"
            className="inputSign"
            type="surname"
            name="surname"
            title="surname"
            onChange={handleInput}
          />
          <input
            placeholder="Phone"
            className="inputSign"
            type="Phone"
            name="Phone"
            title="Phone"
            onChange={handleInput}
          />
          <input
            placeholder="address"
            className="inputSign"
            type="address"
            name="address"
            title="address"
            onChange={handleInput}
          />
          <input
            placeholder="Email"
            className="inputSign"
            type="email"
            name="email"
            title="email"
            onChange={handleInput}
          />
          <input
            placeholder="Password"
            className="inputSign"
            type="Password"
            name="Password"
            title="Password"
            onChange={handleInput}
          />
        </div>

        <div className="wrongSign">
          <div className="msgError">{signup.msgIsError}</div>
          <div className="sendSign" onSubmit={CorrectUser}>Sign up</div>
        </div>
      </div>

      <div className="rightContainerSign"></div>
    </div>
  );
};

export default Signup;
