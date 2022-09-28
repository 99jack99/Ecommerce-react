import React, { useState, useEffect } from "react";
import "./Admin.scss";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../userSlice";
import { selectProduct } from "./AdminSlice";

import axios from "axios";

const Admin = (props) => {

  const pro = useSelector(selectProduct);
  let nPro = pro.id.id;


  const dispatch = useDispatch();
  const token = useSelector(userSelector);

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    size: "",
    sex: "",
    price: "",
    stock: "",
  });

  const handleInput = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const theproduct = () => {
    dispatch(
      updateProduct(
        product.id,
        product.name,
        product.description,
        product.size,
        product.sex,
        product.price,
        product.stock
      )
    );
  };

  const updateProduct = (id, name, description, size, sex, price, stock) => async (dispatch) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        };
        const body = {
          name: name,
          description: description,
          sex: sex,
          size:size,
          price: price,
          stock: stock,
        };

        const product = await axios.put(
          `http://127.0.0.1:3000/products/inventary/${id}`,
          body,
          config
        );

        let response = product;
        console.log(response);

        if (response.status === 200) {
          dispatch(theproduct(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    const deleteProduct = () => async (dispatch) => {
      try {
          const config = {
              headers: {
                  "Authorization": `Bearer ${token.token}`
              }
          }
          const product = await axios.delete('http://127.0.0.1:3000/products/delete',
          {id:nPro},
          config);
          
          let response = product
          if (response.status === 200) {
              dispatch(theproduct(response.data))
          }

      } catch (error) {
          console.log(error)
      }
  }

  /* const deleteProduct = (id) => async () => {
    console.log("HOLA");
    try {
      const productDel = await axios.delete(
        "http://127.0.0.1:3000/products/delete",
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        },

        { id: id }
      );

      let response = productDel;
      if (response.status === 200) {
        console.log("Has borrado producto" + response);
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div id="adminWall">
      {/* DELETE PRODUCT */}
      <h1 id="adminTitle">ADMIN PANEL</h1>

      <h2 id="delTitle">Delete Product</h2>
      <input
        className="inputDel"
        placeholder="Id of the product"
        name="id"
        /* onChange={handleInput} */
      />
      <div
        id="deleteButton"
        onClick={deleteProduct()} /* onClick={deleteProduct(product.id)} */
      >
        DELETE
      </div>

      {/* UPDATE PRODUCT */}
      <div className="updateWall" /* onSubmit={uProducts} */>
        <h2 id="updateTitle">Update Product</h2>
        <input
          placeholder="Id"
          className="upAdmin"
          type="integer"
          name="id"
          onChange={handleInput}
        />

        <input
          placeholder="Name"
          className="upAdmin"
          type="text"
          name="name"
          onChange={handleInput}
        />

        <input
          placeholder="Description"
          className="upAdmin"
          type="text"
          name="description"
          onChange={handleInput}
        />

        <input
          placeholder="Size"
          className="upAdmin"
          type="text"
          name="size"
          onChange={handleInput}
        />

        <input
          placeholder="Sex"
          className="upAdmin"
          type="text"
          name="sex"
          onChange={handleInput}
        />

        <input
          placeholder="Price"
          className="upAdmin"
          type="integer"
          name="price"
          onChange={handleInput}
        />

        <input
          placeholder="Stock"
          className="upAdmin"
          type="integer"
          name="stock"
          onChange={handleInput}
        />

        <div className="upButton" onClick={updateProduct()}>UPDATE</div>
      </div>
    </div>
  );
};

export default Admin;
