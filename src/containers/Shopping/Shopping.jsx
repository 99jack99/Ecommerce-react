import React from "react"
import { useState, useEffect } from "react"

import axios from "axios"

import "./Shopping.scss"

/* import ProductCard from "../../Components/ProductCard/ProductCard" */

const Shopping = (props) => {

    const [products, setProducts] = useState({
        products: []
    })

    useEffect(() => {
        axios.get('https://ropaon.herokuapp.com/api/productall')
            .then(resp => {
                setProducts({
                    products: resp.data.data
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
                
            </div>



        </div>
        
    )
}

export default Shopping