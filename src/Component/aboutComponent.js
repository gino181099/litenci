import React from "react";
import "./Styles/aboutStyle.css";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

function About() {
  return (
    <>
      <div className="about">
        <div className="about__title">
          <h2 id="section">Quiénes somos?</h2>
        </div>
        <div className="content">
          <Fade left>
            <div className="content__left">
              <p>
                Somos un emprendimiento centrado en crear sitios web para
                empresas/emprendimientos que quieran mejorar sus rendimientos y
                tener presencia en internet.
              </p>
            </div>
            <div className="content__right">
              <img
                alt=""
                src="https://image.flaticon.com/icons/png/512/65/65827.png"
                className="invert"
              />
            </div>
          </Fade>
        </div>
        <div className="about__title">
          <h2>Cómo me pueden ayudar?</h2>
        </div>
        <div className="content">
          <Fade right>
            <div className="content__left">
              <p>
                Ofrecemos diferentes soluciones dependiendo de lo que necesites.{" "}
                <b>Dichas soluciones incluyen:</b>
              </p>
            </div>
            <div className="content__right">
              <img
                alt=""
                src="https://image.flaticon.com/icons/png/512/2597/2597085.png"
                className="invert"
              />
            </div>
          </Fade>
        </div>
      </div>
      <div class="container">
        <div class="card__container">
          <div class="card">
            <Flip left>
              <div class="card__content">
                <h3 class="card__header">Hosting Gratuito</h3>
                <p class="card__info">
                  Una vez adquirido el sitio, no es necesario pagar por un
                  hosting para que el mimso siga funcionando.
                </p>
              </div>
            </Flip>
          </div>
          <div class="card">
            <Flip left>
              <div class="card__content">
                <h3 class="card__header">Integración con Píxel</h3>
                <p class="card__info">
                  Integración con el Píxel de Facebook y Google, para que puedan
                  analizar los resultados de sus campañas publicitarias.
                </p>
              </div>
            </Flip>
          </div>
          <div class="card">
            <Flip left>
              <div class="card__content">
                <h3 class="card__header">Email Marketing</h3>
                <p class="card__info">
                  Integración con Mailchimp para las campañas que necesiten de
                  envíos de emails.
                </p>
              </div>
            </Flip>
          </div>
        </div>
      </div>
      <div class="about">
        <div className="about__title">
          <h2>Como contactarnos</h2>
        </div>
        <div className="next">
          <NavLink to="/contact" className="btn2">
            Contacto
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default About;
