import React from "react"
import { useState, useEffect } from "react"

import axios from "axios"

import "./Shopping.scss"

import Productcard from "../../components/ProductCard/Productcard"

const Shopping = (props) => {

    const [products, setProducts] = useState({
        allproducts: []
    })

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/products/inventary')
            .then(resp => {
                setProducts({
                    allproducts: resp.data
                })
            })

    }, [])


    return (
        <div id="shopWall">

            <div className="superiorBar">
                <div className="categoryShop">
                    <span className="itemCategory">All</span>
                </div>

                <div className="categoryShop">
                    <span className="itemCategory">Man</span>
                </div>
                <div className="categoryShop">
                    <span className="itemCategory">Woman</span>
                </div>
                <div className="categoryShop">
                    <span className="itemCategory">Last added</span>
                </div>
            </div>

            <div className="inferiorShop">

            {products.allproducts.map((allproducts, i) => (

                    <div id="inferiorItemsPro" key={i}>
                        <Productcard data={allproducts} key={i}/>
                        
                    </div>

            ))}
            
            </div>



        </div>
        
    )
}

export default Shopping