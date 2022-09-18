import React from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../userSlice";
import { logOut } from "../userSlice";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const credentials = useSelector(userSelector);

  const dispatch = useDispatch();
  const backhome = useNavigate();

  return (
    <div className="profileWall">
      <div className="profileCard">
        <h1 id="profileTitle">Welcome back again! </h1>
        <div className="profileUser">
          <p>
            {credentials.user.name} {credentials.user.surname}
          </p>
          <p></p>
        </div>
        <div className="profileInfo">
          <hr className="hrStyle"/>
          <p >Address:</p>
          <p>{credentials.user.address}</p>

          <hr className="hrStyle"/>
          <p>Email:</p>
          <p>{credentials.user.email}</p>
        </div>

        <div
          className="profileLogout"
          onClick={() => {
            dispatch(logOut());
            backhome("/");
          }}
        >
          Log out
        </div>
      </div>

      
    </div>
  );
};

export default Profile;
