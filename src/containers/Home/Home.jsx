import React from "react";

import "./Home.scss"
import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <div id="homeWall">

            <div className="homeSectionLeft">

                <div className="homeText">
                    POWERFUL, A MENACE TO THE WORLD
                </div>
              
            </div>

            <div className="homeSectionRight">

            <NavLink className="shopButton" to="/shopping">SHOP</NavLink>

                <div className="infoButton">
                    we have more than 1000+ clothes, you can reach them with just one click!
                </div>
                
            </div>

        </div>
    )

}

    
export default Home