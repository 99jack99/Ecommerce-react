import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="foot">
      <div className="footItems">

        {/* ITEM 1 */}
        <div className="footItem">
          <div className="footItemTittle">HELP</div>
          <div className="footItemPoints">
            <ul>
              <li>Llamanos</li>
              <li>Preguntas Frecuentes</li>
            </ul>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="footItem">
          <div className="footItemTittle">FOLLOW US</div>
          <div className="footItemPoints">
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footUbi">
        <div>ESPAÑA | ESPAÑA - VALENCIA</div>
      </div>
    </div>
  );
};

export default Footer;
