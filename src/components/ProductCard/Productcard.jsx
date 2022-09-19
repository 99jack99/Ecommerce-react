import React from "react";
import "./Productcard.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../Containers/User/userSlice";

import { useDispatch, useSelector } from "react-redux";
/* import { arrayPurchase } from "../../Containers/Purchase/purchaseSlice"; */
/* import { idProduct } from "../../Containers/Admin/adminSlice"; */

const Productcard = props => {
  const navigate = useNavigate();

  const credentials = useSelector(userSelector);

  /* const alertClick = (event) => (dispatch) => {
        dispatch(arrayPurchase(event))
        alert('Se ha añadido al carrito tu producto');
    } */

  if (!credentials?.token) {
    return (
        <div id="cardWall">
        <h1 id="titleCard">{props.data.name}</h1>

        <div id="cardProduct">
          <div id="photoStack">
            <div className="itemStack">A</div>
            <div className="itemStack">B</div>
            <div className="itemStack">C</div>
            <div className="itemStack">D</div>
          </div>

          <div id="photo">
            <div className="productPrice">{props.data.price}.€</div>
          </div>
        </div>
      </div>
    );

  } else {
    return (
      <div id="cardWall">
        <h1 id="titleCard">{props.data.name}</h1>

        <div id="cardProduct">

          <div id="photoStack">
            <div className="itemStack">A</div>
            <div className="itemStack">B</div>
            <div className="itemStack">C</div>
            <div className="itemStack">D</div>
          </div>

          <div id="photo">
            <div className="productPrice">{props.data.price}.€</div>
            <div className="productBuy">BUY</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Productcard;
