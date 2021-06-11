import React from "react";
import "./Styles/footerStyle.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="r-footer">
          <li>
            <h2>Social</h2>
            <ul className="box">
              <li>
                <NavLink to="https://www.google.com/">Facebook</NavLink>
              </li>
              <li>
                <NavLink to="https://www.google.com/">Instagram</NavLink>
              </li>
              <li>
                <NavLink to="https://www.google.com/">Linkedin</NavLink>
              </li>
              <li>
                <NavLink to="https://www.google.com/">Whatsapp</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <h2>Información</h2>
            <ul className="box h-box">
              {/* <li>
                <NavLink to="/blog">Blog</NavLink>
              </li> */}
              <li>
                <NavLink to="/about">Quiénes Somos?</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacto</NavLink>
              </li>
              <li>
                <NavLink to="/home">Inicio</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul className="box">
              <li>
                <NavLink to="/privacy">Política de Privacidad</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </footer>

      <div className="b-footer">
        <p>All rights reserved by ©Litenci 2021 </p>
      </div>
    </>
  );
}

export default Footer;
